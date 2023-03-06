const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const headerOfItem = item.querySelector("h2").textContent;
  const countItem = item.querySelectorAll("li").length;
  console.log(`Category:  ${headerOfItem} \nElements: ${countItem}`);
});
