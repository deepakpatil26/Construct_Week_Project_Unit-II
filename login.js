document.getElementById("loginBtn").addEventListener("click", startLogin);
let data = JSON.parse(localStorage.getItem("registeredUsers"));
function startLogin() {
  let email = document.getElementById("loginEmailVal").value;
  let password = document.getElementById("loginPassVal").value;
  if (email === "" || password === "") {
    alert("Invalid Email or Password");
  } else {
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].email)
      if (email === data[i].email && password === data[i].password) {
        alert("Login success");
        window.location.href = "../index.html";
      } else {
        alert("Invalid credentials");
      }
    }
  }
}

document.getElementById("createAccount").addEventListener("click", function () {
  window.location.href = "signup.html";
});
