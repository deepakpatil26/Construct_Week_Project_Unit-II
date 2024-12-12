document.getElementById("loginBtn").addEventListener("click", startLogin);

function startLogin() {
  // Retrieve data from localStorage
  let data = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  // Input values
  let email = document.getElementById("loginEmailVal").value.trim();
  let password = document.getElementById("loginPassVal").value.trim();

  // Input validation
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Check credentials
  const user = data.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password.");
  }
}

// Navigate to signup page
document.getElementById("createAccount").addEventListener("click", function () {
  window.location.href = "signup.html";
});
