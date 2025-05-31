// login.js: Handles login logic and redirect to BMI calculator

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const errorDiv = document.getElementById('loginError');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    if (username === 'demo' && password === '112233') {
      // Login success, set session flag and redirect
      sessionStorage.setItem('bmi_logged_in', '1');
      window.location.href = 'index.html';
    } else {
      errorDiv.textContent = 'Username หรือ Password ไม่ถูกต้อง';
      errorDiv.style.display = 'block';
    }
  });
});
