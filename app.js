var emailError = document.getElementById("email-error");
var emailInput = document.getElementById("floatingInput");
function validationEmail() {
  if (
    !emailInput.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailError.innerHTML = "Please enter a valid email";
    emailInput.style.borderColor = "red";
    emailError.style.top = "120%";
    return false;
  } else {
    emailError.innerHTML = "";
    emailError.style.top = "120%";
    emailInput.style.borderColor = "primary";
  }

  return true;
}
var passwordError = document.getElementById("password-error");
var passwordField = document.getElementById("floatingPassword");
function validationPassword() {
  // passwordLabel.style.bottom = "45px";
  if (passwordField.value.length <= 6) {
    passwordError.innerHTML = "6+ stong character";
    passwordField.style.borderColor = "#D74343";
    passwordError.style.top = "120%";
    return false;
  } else {
    passwordError.innerHTML = "";
    passwordError.style.top = "120%";
    passwordField.style.borderBottomColor = "#717171";
  }

  return true;
}
var showPasswordImg = document.getElementById("show-password-img");

function showPassword() {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    showPasswordImg.src = "./Group 39032.svg";
    showPasswordImg.alt = "Hide Password";
  } else {
    passwordField.type = "password";
    showPasswordImg.src = "./Group 40945.svg";
    showPasswordImg.alt = "Show Password";
  }
}