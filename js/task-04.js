// отримати посилання на кнопки і лічильник
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value')
let counterValue = 0;

// ====== слухач з колбеком =======
const decrementClick = () => {
counterValue++;
	value.textContent = counterValue;
};

decrementButton.addEventListener("click", decrementClick); 

const incrementClick = () => {
	counterValue--;
  value.textContent = counterValue;
};

incrementButton.addEventListener("click", incrementClick); 

// _______________________________________________________

// ======  активний слухач  =======

// decrementButton.addEventListener("click", () => {
// 	counterValue++;
// 	value.textContent = counterValue;
// }); 

// incrementButton.addEventListener("click", () => {
//   counterValue--;
//   value.textContent = counterValue;
// }); 