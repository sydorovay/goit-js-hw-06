// посилання на input та span
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

//  додати слухача на інпут, перевірити поточне значення інпуту,
// задати значення спану при пустому інпуті, додавання тексту в спан
inputName.addEventListener("input", () => {
  outputName.value === ""
    ? (outputName.textContent = "Anonymous")
    : (outputName.textContent = inputName.value);
});

// ________________________________________________________

// Іший варіант

// // додати слухача на інпут
// inputName.addEventListener("input", (event) => {
//   //поточне значення інпуту
//   const inputValue = event.target.value;

//   //Вставити текст в спан, перевіряючи, чи інпут не пустий
//   outputName.textContent = inputValue ? inputValue : "Anonymous";
// });
