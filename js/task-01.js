const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

// вивід в консоль рядка з кількістю категорій

console.log(`Number of categories: ${categoriesItems.length}`);

// перебір категорій і вивід заголовків , та кількістю елементів в категорії

categoriesItems.forEach((item) => {
  const headerOfItem = item.querySelector("h2").textContent;
  const countItem = item.querySelectorAll("li").length;
  console.log(`Category:  ${headerOfItem} \nElements: ${countItem}`);
});
