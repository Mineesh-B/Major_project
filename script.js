// DOM Elements
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Event Listeners
form.addEventListener('submit', validateForm);
form.addEventListener('change', validateOnChange);

// Validation logic
function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  let valid = true; // Flag for validity

  // Name Validation
  if (fullName.value.trim().length < 5) {
    showError(fullName);
    valid = false;
  } else removeError(fullName);

  // Email Validation
  if (!email.value.includes('@') || email.value.trim().length < 5) {
    showError(email);
    valid = false;
  } else removeError(email);

  // Phone Validation
  if (phone.value === '1234567890' || !/^[0-9]{10}$/.test(phone.value)) {
    showError(phone);
    valid = false;
  } else removeError(phone);

  // Password Validation
  if (
    password.value.toLowerCase() === 'password' ||
    password.value.toLowerCase() === fullName.value.toLowerCase() ||
    password.value.length < 8
  ) {
    showError(password);
    valid = false;
  } else removeError(password);

  // Confirm Password Validation
  if (confirmPassword.value !== password.value || confirmPassword.value === '') {
    showError(confirmPassword);
    valid = false;
  } else removeError(confirmPassword);

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
}

// OnChange Updates
function validateOnChange(e) {
  const input = e.target;
  if (input.value.trim() !== '') removeError(input);
}

// Helper Functions
function showError(input) {
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');
}

function removeError(input) {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
}
