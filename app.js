document.addEventListener("DOMContentLoaded", async () => {
  const lessonItems = Array.from(
    document.querySelectorAll("[data-element='lesson']")
  );
  const moduleItems = document.querySelectorAll("[data-element='module']");
  const lessonBtn =
    document.querySelector("[data-element='lesson-button']") || null;
  const currentLessonSlug =
    document.body.getAttribute("data-current-lesson") || null;
  const currentCourseSlug =
    document.body.getAttribute("data-current-course") || null;
  const memberstack = window.$memberstackDom;

  let memberJsonData;
  let totalCompletedLessons = 0;
  let firstIncompleteLesson = null;

  memberstack.getCurrentMember().then(async ({ data: member }) => {
    if (member) {
      const memberJson = await memberstack.getMemberJSON();
      memberJsonData = memberJson.data;

      const courses = memberJsonData !== null ? memberJsonData.courses : [];

      if (!courses.length) {
        memberJsonData = {
          courses: [{ slug: currentCourseSlug, completed_lessons: [] }]
        };
      }

      const currentCourse = memberJsonData.courses.length
        ? memberJsonData.courses.find(
            (course) => course.slug === currentCourseSlug
          )
        : currentCourseSlug;
      const completedLessons = currentCourse
        ? currentCourse.completed_lessons
        : [];

      updateCourseProgress(courses);
      setupLessonCompletion(lessonItems, completedLessons, currentLessonSlug);
      setAsideData(lessonItems);
      setupModuleDropdowns(moduleItems, lessonItems, totalCompletedLessons);
      setDropdowns(moduleItems);
    }
  });

  // when the page loads, check all lessons for the given course
  // if there is a lesson in the JSON that is NOT present on the page, remove it from the JSON
  // this is because the lesson was removed internally

  function setupLessonCompletion(
    lessonItems,
    completedLessons,
    currentLessonSlug
  ) {
    lessonItems.forEach((lesson) => {
      const lessonSlug = lesson.getAttribute("data-slug");
      if (completedLessons.includes(lessonSlug)) {
        lesson.classList.add("is-complete");
        totalCompletedLessons++;
        if (currentLessonSlug && lessonSlug === currentLessonSlug) {
          setLessonButtonState(lessonBtn, "add");
        }
      }
    });

    if (lessonBtn) {
      lessonBtn.addEventListener("click", () => {
        if (lessonBtn.classList.contains("is-complete")) {
          updateLesson("remove");
          totalCompletedLessons--;
        } else {
          updateLesson("add");
          totalCompletedLessons++;
        }
      });
    }
  }

  function setupModuleDropdowns(moduleItems, lessonItems) {
    moduleItems.forEach((module) => {
      const moduleSlug = module.getAttribute("data-slug");
      const lessons = lessonItems.filter(
        (lesson) => lesson.getAttribute("data-module-slug") === moduleSlug
      );

      lessons.forEach((lesson) => {
        module.querySelector("[data-element='lessons']").append(lesson);
      });
    });
  }

  function setDropdowns(moduleItems) {
    moduleItems.forEach((module) => {
      const trigger = module.querySelector("[data-element='trigger']");
      const dropdown = trigger.parentElement;
      const links = dropdown.querySelectorAll("a");
      const asideBtn = document.querySelector("[data-aside='button']");

      links.forEach((link) => {
        if (
          link.classList.contains("w--current") ||
          link.href === asideBtn.href
        ) {
          dropdown.classList.add("is-active");
          return;
        }
      });

      trigger.addEventListener("click", () => {
        dropdown.classList.toggle("is-active");
      });
    });
  }

  async function updateLesson(action) {
    let currentCourse =
      memberJsonData.courses.find(
        (course) => course.slug === currentCourseSlug
      ) || {};

    if (!currentCourse) {
      // Handle the case where the course is not found.
      return;
    }

    let completedLessons = currentCourse.completed_lessons || [];

    // Find all elements with the specified lessonSlug
    const elements = document.querySelectorAll(
      `[data-slug='${currentLessonSlug}']`
    );

    setLoader(elements);

    // Update the completed lessons array based on the type
    let updatedCompletedLessons = completedLessons;

    if (action === "add" && !completedLessons.includes(currentLessonSlug)) {
      updatedCompletedLessons = [...completedLessons, currentLessonSlug];
    } else if (
      action === "remove" &&
      completedLessons.includes(currentLessonSlug)
    ) {
      updatedCompletedLessons = completedLessons.filter(
        (lesson) => lesson !== currentLessonSlug
      );
    } else {
      // No update needed
      return;
    }

    // Create a new currentCourse object with the updated completed_lessons property
    currentCourse = {
      slug: currentCourseSlug,
      completed_lessons: updatedCompletedLessons
    };

    const updatedCourses = memberJsonData.courses.map((course) =>
      course.slug === currentCourseSlug ? currentCourse : course
    );

    // Update the member's data
    const updatedMemberData = {
      ...memberJsonData,
      courses: updatedCourses
    };

    memberJsonData = updatedMemberData;

    const result = await memberstack.updateMemberJSON({
      json: updatedMemberData
    });

    // Update the UI for all elements with the specified lessonSlug
    elements.forEach((element) => {
      if (action === "add") {
        element.classList.add("is-complete");
      } else if (action === "remove") {
        element.classList.remove("is-complete");
      }
    });

    setLoader(elements);
    setLessonButtonState(lessonBtn, action);
    updateCourseProgress(updatedCourses);
  }

  function setLessonButtonState(button, type) {
    // Update the lesson button text
    button.firstChild.textContent =
      type === "add" ? "Mark as Incomplete" : "Mark as Complete";
    type === "add"
      ? button.classList.add("is-complete")
      : button.classList.remove("is-complete");
  }

  function setStyleState(element) {
    return window.getComputedStyle(element).display === "block"
      ? "none"
      : "block";
  }

  function setLoader(elements) {
    // Iterate through all elements and process them
    elements.forEach((element) => {
      // Find the loader element
      const loader = element.querySelector("[data-element='loader']");

      // If loader exists, toggle its display property
      if (loader) {
        loader.style.display = setStyleState(loader);
        loader.previousElementSibling.style.display = setStyleState(loader);
      }
    });
  }

  function updateCourseProgress(courses) {
    // assumes there will only be 1 course of each type per page
    Array.from(document.querySelectorAll("[data-course]")).forEach(
      (courseElement) => {
        const element = courseElement.getAttribute("data-element");
        const slug = courseElement.getAttribute("data-course");
        const lessonCount = courseElement.getAttribute("data-lesson-count");
        const currentCourse =
          courses.find((course) => course.slug === slug) || {};
        const completedLessons =
          Object.keys(currentCourse).length > 0
            ? currentCourse.completed_lessons
            : [];
        const percentage = completedLessons.length
          ? (completedLessons.length / lessonCount) * 100
          : 0;

        if (element === "progress") {
          if (percentage === 100) {
            courseElement.classList.add("is-complete");
          }
          courseElement.style.width = percentage + "%";
        } else if (element === "progress-percentage") {
          if (percentage === 100) {
            courseElement.textContent = `${Math.round(percentage)}% 🎉`;
          } else {
            courseElement.textContent = `${Math.round(percentage)}%`;
          }
        }
      }
    );
  }

  function setAsideData(lessons) {
    const asideBtn = document.querySelector("[data-aside='button']");
    const asideTitle = document.querySelector("[data-aside='title']");
    const asideTag = document.querySelector("[data-aside='tag']");
    const page = document.body.getAttribute("data-page");
    const currentURL = window.location.href;

    if (asideBtn && asideTitle && asideTag) {
      let hasAtLeastOneCompleteLesson = false;

      for (const lesson of lessons) {
        if (lesson.classList.contains("is-complete")) {
          hasAtLeastOneCompleteLesson = true;
        } else if (
          !firstIncompleteLesson &&
          lesson.querySelector("a").href !== currentURL
        ) {
          firstIncompleteLesson = lesson;
        }
      }

      if (page === "course") {
        if (hasAtLeastOneCompleteLesson) {
          // user has started the course
          if (firstIncompleteLesson) {
            // next lesson in the course
            asideTag.textContent = "Continue course:";
            asideTitle.textContent = firstIncompleteLesson.querySelector(
              "[data-lesson='title']"
            ).textContent;
            asideBtn.href = firstIncompleteLesson.querySelector("a").href;
            asideBtn.textContent = "Go to Lesson";
          } else {
            // all lessons are complete
          }
        } else {
          // course has not been started yet
          asideTag.textContent = "Start course:";
          asideTitle.textContent = firstIncompleteLesson.querySelector(
            "[data-lesson='title']"
          ).textContent;
          asideBtn.href = firstIncompleteLesson.querySelector("a").href;
        }
      } else if (page === "lesson") {
        asideTag.textContent = "Next lesson:";
        asideTitle.textContent = firstIncompleteLesson.querySelector(
          "[data-lesson='title']"
        ).textContent;
        asideBtn.href = firstIncompleteLesson.querySelector("a").href;
        asideBtn.textContent = "Next Lesson";
      }
    }
  }
});
