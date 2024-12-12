// Add event listener to the "Create Account" button
document
  .getElementById("createAccount")
  .addEventListener("click", handleSignUp);

// Array to hold registered users (retrieved from localStorage if exists)
let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

/**
 * Handles user sign-up logic
 */
function handleSignUp(event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve input values
  const userData = {
    firstName: getInputValue("signUpFName"),
    lastName: getInputValue("signUpLName"),
    email: getInputValue("signUpEmail"),
    street: getInputValue("signUpStreet"),
    city: getInputValue("signUpCity"),
    state: getInputValue("signUpState"),
    zipcode: getInputValue("signUpZipcode"),
    phone: getInputValue("signUpPhone"),
    password: getInputValue("signUpPassword"),
  };

  // Validate user input
  if (!validateUserData(userData)) {
    alert("Please fill out all fields correctly.");
    return;
  }

  // Save user data
  registeredUsers.push(userData);
  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

  // Redirect to the login page
  alert("Account created successfully! Redirecting to login...");
  window.location.href = "login.html";
}

/**
 * Retrieves the value of an input field by its ID
 * @param {string} id - The ID of the input element
 * @returns {string} - The value of the input
 */
function getInputValue(id) {
  return document.getElementById(id)?.value.trim() || "";
}

/**
 * Validates user data
 * @param {Object} userData - The object containing user data
 * @returns {boolean} - Whether the data is valid
 */
function validateUserData(userData) {
  const {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zipcode,
    phone,
    password,
  } = userData;

  // Validate required fields
  if (
    !firstName ||
    !lastName ||
    !email ||
    !street ||
    !city ||
    !state ||
    !zipcode ||
    !phone ||
    !password
  ) {
    return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate password strength (at least 8 characters)
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  // Validate phone number (basic validation for digits)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  return true;
}
