// отримати посилання на input та span
const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// додати до input слухача з колбеком
fontSizeControl.addEventListener("input", resizeFontSize);

// в функії , для розміру текста спану присвоїти значення розміру input з 'px'
function resizeFontSize() {
  const fontSize = fontSizeControl.value + "px";
  text.style.fontSize = fontSize;
}

// __________________________________________________________

// // інший варіант,коротший.
// fontSizeControl.addEventListener("input", () => {
//   textSpan.style.fontSize = fontSizeControl.value + "px";
// });
  