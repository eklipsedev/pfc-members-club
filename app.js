document.addEventListener("DOMContentLoaded", async () => {
  const lessonItems = Array.from(
    document.querySelectorAll("[data-element='lesson']")
  );
  const moduleItems = document.querySelectorAll("[data-element='module']");
  const courseItems = document.querySelectorAll("[data-course");
  const lessonBtn =
    document.querySelector("[data-element='lesson-button']") || null;
  const currentLessonSlug =
    document.body.getAttribute("data-current-lesson") || null;
  const currentCourseSlug =
    document.body.getAttribute("data-current-course") || null;
  const memberstack = window.$memberstackDom;
  let memberId;
  let memberJsonData;
  let totalCompletedLessons = 0;

  memberstack.getCurrentMember().then(async ({ data: member }) => {
    if (member) {
      memberId = member.id;
      const memberJson = await memberstack.getMemberJSON(memberId);
      memberJsonData = memberJson;
      const completedLessons = memberJson.data.completed_lessons || [];
      const completedCourses = memberJson.data.courses || [];
      totalCompletedLessons = completedLessons.length;
      updateCourseProgress();
      setupLessonCompletion(
        lessonItems,
        completedLessons,
        currentLessonSlug,
        memberId
      );
      setAsideData(lessonItems);
      setupCourseCompletion(completedCourses);
      setupModuleDropdowns(moduleItems, lessonItems, totalCompletedLessons);
      setDropdowns(moduleItems);
    }
  });

  function setupCourseCompletion(completedCourses) {
    if (courseItems.length) {
      courseItems.forEach((course) => {
        const courseSlug = course.getAttribute("data-course");
        const status = course.querySelector("[data-status");

        completedCourses.forEach((completedCourse) => {
          if (
            completedCourse.slug === courseSlug &&
            completedCourse.complete === true
          ) {
            // course is complete
            status.setAttribute("data-status", "complete");
            status.textContent = "complete 🎉";
          } else if (
            completedCourse.slug === courseSlug &&
            completedCourse.complete === false
          ) {
            // course is in progress
            status.setAttribute("data-status", "in-progress");
            status.textContent = "in progress";
          } else {
            // course hasn't been started
          }
        });
      });
    }
  }

  function setupLessonCompletion(
    lessonItems,
    completedLessons,
    currentLessonSlug
  ) {
    lessonItems.forEach((lesson) => {
      const lessonSlug = lesson.getAttribute("data-slug");
      if (completedLessons.includes(lessonSlug)) {
        lesson.classList.add("is-complete");
        if (currentLessonSlug && lessonSlug === currentLessonSlug) {
          setLessonButtonState(lessonBtn, "add");
        }
      }
    });

    if (lessonBtn) {
      lessonBtn.addEventListener("click", () => {
        if (lessonBtn.classList.contains("is-complete")) {
          updateLesson("remove", currentLessonSlug);
        } else {
          updateLesson("add", currentLessonSlug);
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

      links.forEach((link) => {
        if (link.classList.contains("w--current")) {
          dropdown.classList.add("is-active");
          return;
        }
      });

      trigger.addEventListener("click", () => {
        dropdown.classList.toggle("is-active");
      });
    });
  }

  async function updateLesson(type, lessonSlug) {
    const completedLessons = memberJsonData.data.completed_lessons;
    // Find all elements with the specified lessonSlug
    const elements = document.querySelectorAll(`[data-slug='${lessonSlug}']`);

    setLoader(elements);

    // Update the completed lessons array based on the type
    let updatedCompletedLessons = completedLessons;

    if (type === "add" && !completedLessons.includes(lessonSlug)) {
      updatedCompletedLessons = [...completedLessons, lessonSlug];
    } else if (type === "remove" && completedLessons.includes(lessonSlug)) {
      updatedCompletedLessons = completedLessons.filter(
        (lesson) => lesson !== lessonSlug
      );
    }

    // Update the totalCompletedLessons variable
    totalCompletedLessons = updatedCompletedLessons.length;

    // Update the member's data
    const updatedMemberData = {
      ...memberJsonData.data,
      completed_lessons: updatedCompletedLessons
    };
    const result = await memberstack.updateMemberJSON({
      json: updatedMemberData
    });

    // Update the UI for all elements with the specified lessonSlug
    elements.forEach((element) => {
      if (type === "add") {
        element.classList.add("is-complete");
      } else if (type === "remove") {
        element.classList.remove("is-complete");
      }
    });

    setLoader(elements);
    setLessonButtonState(lessonBtn, type);
    updateCourseProgress();
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

  function updateCourseProgress() {
    const progressBar =
      document.querySelector("[data-element='progress']") || null;
    const progressPercentage = document.querySelector(
      "[data-element='progress-percentage']" || null
    );

    if (progressBar && progressPercentage) {
      const percentage = (totalCompletedLessons / lessonItems.length) * 100;

      progressBar.style.width = percentage + "%";
      progressPercentage.textContent = `${Math.round(percentage)}%`;
    }
  }

  function setAsideData(lessons) {
    const asideBtn = document.querySelector("[data-aside='button']");
    const asideTitle = document.querySelector("[data-aside='title']");
    const asideTag = document.querySelector("[data-aside='tag']");
    const page = document.body.getAttribute("data-page");
    const currentURL = window.location.href;

    if (asideBtn && asideTitle && asideTag) {
      let firstIncompleteLesson = null;
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
