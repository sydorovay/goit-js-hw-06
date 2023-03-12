// Отримати посилання на форму
const loginForm = document.querySelector(".login-form");
// Додати слухача до форми
loginForm.addEventListener('submit', (event) => {
	//  Отримати доступ до елементів форми
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
  // скасувати перезавантаження сторінки
  event.preventDefault();
  // Перевірити, чи  поля заповнені
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Увага!!! Будь ласка, заповніть всі поля !");
  } else {
    // Створити об'єкт з введеними даними
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    // Вивести дані в консоль
    console.log(formData);
    // Очистити форму
    loginForm.reset();
  }
});



