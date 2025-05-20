document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  
  var errorMessages = document.getElementsByClassName("error-msg");
  for (var i = 0; i < errorMessages.length; i++) {
    errorMessages[i].innerText = "";
    errorMessages[i].style.display = "none";
  }

  
  var inputs = document.querySelectorAll("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.border = "1px solid #ccc";
    inputs[i].classList.remove("inputErrorImg");
  }

 
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  

  var hasError = false;

 
  if (firstName.value.trim() === "") {
    showError(firstName, "First name is required");
    firstName.classList.add("inputErrorImg");
    hasError = true;
  }

  if (lastName.value.trim() === "") {
    showError(lastName, "Last name is required");
    lastName.classList.add("inputErrorImg");
    hasError = true;
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    email.classList.add("inputErrorImg");
    hasError = true;
  } else if (!validateEmail(email.value.trim())) {
    showError(email, "Enter a valid email");
    hasError = true;
  }

  if (password.value.trim().length < 6) {
    showError(password, "Password must be at least 6 characters");
    password.classList.add("inputErrorImg");
    hasError = true;
  }

  if (hasError === false) {
    alert("Login successful!");
  }
});


function showError(inputElement, message) {
  var errorMsg = inputElement.nextElementSibling;
  errorMsg.innerText = message;
  errorMsg.style.display = "block";
  inputElement.style.border = "2px solid red";
}


function validateEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
