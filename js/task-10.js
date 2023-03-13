function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Отримати посилання на елементи
const controls = document.querySelector("#controls");
const dataCreateBtn = document.querySelector("[data-create]");
const dataDestroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

// Додати слухача на кнопку створення, та очищення
dataCreateBtn.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});
dataDestroyBtn.addEventListener("click", destroyBoxes);

// callback ф-ція створення блоків зі збільшенням кожного наступного на 10 , задає випадковий колір
function createBoxes(amount) {
  const boxSize = 30;
  const newBoxes = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const size = boxSize + i * 10;
    const newDiv = document.createElement("div");
    newDiv.style.width = size + "px";
    newDiv.style.height = size + "px";
    newDiv.style.backgroundColor = getRandomHexColor();
    newBoxes.appendChild(newDiv);
  }
  boxes.appendChild(newBoxes);
}

// callback ф-ція - Очистити
function destroyBoxes() {
  boxes.innerHTML = "";
}
