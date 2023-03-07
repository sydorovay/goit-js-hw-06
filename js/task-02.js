const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// знайшов список

const list = document.querySelector("#ingredients");

// створення масиву з присвоєнням назв (текстовий вміст), та класу елементам списку і вивід в список

const completeTheList = ingredients.map((ingredient) => {
  const items = document.createElement("li");
  items.textContent = ingredient;
  items.classList.add("item");
  list.append(items);
});

// _______________________________________________________________________________________

// // знайшов список
// const ul = document.querySelector("#ingredients");

// // робота над елементами списку

// const createListItem = (ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   return li;
// };

// // створенння масиву який складається з результату виклику функції createListItem()
// const ingredientsList = ingredients.map(createListItem);

// // розпилення масив в список
// ul.append(...ingredientsList);
