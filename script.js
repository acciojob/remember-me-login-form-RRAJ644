const loginForm = document.getElementById('loginForm');
const existingButton = document.getElementById('existing');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('checkbox');

// Check for saved user details on page load
window.addEventListener('load', () => {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingButton.style.display = 'block';
    existingButton.addEventListener('click', () => {
      alert(`Logged in as ${savedUsername}`);
    });
  }
});

// Handle form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (rememberMeCheckbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  alert(`Logged in as ${username}`);

  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    existingButton.style.display = 'block';
  }
});
