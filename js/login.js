//
// User Form for Login and SignUp
document.getElementById("btn-Form").addEventListener("click", openUserForm);
document.getElementById("btn-close").addEventListener("click", closeUserForm);

function openUserForm() {
  document.getElementById("userForm").style.display = "block";
}

function closeUserForm() {
  document.getElementById("userForm").style.display = "none";
}

//
// User Session
function checkingUsernameSessionValue() {
  let usernameSessionValue = sessionStorage.getItem("username");
  let loginBtn = document.querySelector(".login-btn");
  let username = document.querySelector(".username");
  let signOutBtn = document.querySelector(".sign-out");
  if (usernameSessionValue) {
    username.style.display = "block";
    username.innerHTML = usernameSessionValue + '<i class="fas fa-user"></i>';
    loginBtn.style.display = "none";
    signOutBtn.style.display = "block";
  }
  signOutBtn.addEventListener("click", signOut);
  function signOut() {
    window.open("index.html", "_self");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
  }
}

checkingUsernameSessionValue();
