// отримати посилання на input
const input = document.querySelector("#validation-input");

// додати до 'input' слухача, для спостереження за втратою фокуса, з колбеком  (порівняння з dataLength)
input.addEventListener("blur", oninputBlur);

// порівняти кількість символів в input(input.value) зі значеннямм dataLength (значення 'dataLength' перетворити на число). Присвоїти клас відповідний клас (true-valid, false-invalid)
function oninputBlur() {
  const inputValue = input.value;
  const dataLength = input.getAttribute("data-length");

  if (inputValue.length === parseInt(dataLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
// _________________________________________________________

// // Варіант з використанням методу 'classList.toggle'
// input.addEventListener("blur", () => {
//   const isValid =
//     input.value.length === parseInt(input.getAttribute("data-length"));
//   input.classList.toggle("valid", isValid);
//   input.classList.toggle("invalid", !isValid);
// });
