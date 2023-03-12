// Отримати посилання на body, кнопку, та span
const changeColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.querySelector("body");

// Додати слухача 'click' на кнопку, з ф-цією  присвоєння згенерованого кольору для фону 'body' (інлайн-стиль) і значення кольору для 'span'.
changeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.setAttribute("style", `background-color: ${randomColor}`);
  colorSpan.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// інлайн стилі використовувати не рекомендовано!
//
// body.style.background = randomColor;
