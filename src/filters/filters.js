export const handleSettingFilters = () => {
  const tagCategoryContainer = document.querySelector("[data-group='tag-category']");
  const tagContainer = document.querySelector("[data-group='tags']");

  if (tagCategoryContainer && tagContainer) {
    const tagCategoryListItems = Array.from(tagCategoryContainer.querySelectorAll('.w-dyn-item'));
    const tagListItems = Array.from(tagContainer.querySelectorAll('.w-dyn-item'));

    function filterTagsByCategory(tagListItems, category) {
      return tagListItems.filter(
        (tagListItem) => tagListItem.getAttribute('data-category') === category
      );
    }

    tagCategoryListItems.forEach((tagCategoryListItem) => {
      console.log('list item');
      const category = tagCategoryListItem.getAttribute('data-category');
      const matchingTagListItems = filterTagsByCategory(tagListItems, category);

      const filterWrapper = document.createElement('div');
      filterWrapper.classList.add('w-dyn-list', 'jetboost-filter-5813');
      console.log(filterWrapper);
      const dynList = document.createElement('div');
      dynList.classList.add('w-dyn-items');
      filterWrapper.appendChild(dynList);

      tagCategoryListItem.append(filterWrapper);

      const tagElements = matchingTagListItems.map((tag) => tag.cloneNode(true));
      dynList.append(...tagElements);
      console.log(dynList);
    });

    tagContainer.remove();
  }
};
