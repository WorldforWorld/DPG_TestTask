document.addEventListener("DOMContentLoaded", () => {});
const form = document.querySelector("form");

const inputs = document.querySelectorAll(".input-group input");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    RemoveErrorClasses();
  });
});
const userMessage = document.querySelector("#user-message");
userMessage.addEventListener("input", () => {
  RemoveErrorClasses();
});
const inputField = document.querySelector("#policy-checkboxs");
inputField.addEventListener("change", () => {
  console.log("change: ");
  const inputField = document
    .querySelector(".policy__label")
    .closest(".policy");
  inputField.classList.remove("error");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = document.querySelector("#user-name").value.trim();
  const userCompany = document.querySelector("#user-company").value.trim();
  const userEmail = document.querySelector("#user-email").value.trim();
  const userPhone = document.querySelector("#user-phone").value.trim();
  const userSubject = document.querySelector("#user-subject").value.trim();
  const userMessage = document.querySelector("#user-message").value.trim();
  const policyCheckbox = document.querySelector("#policy-checkboxs");

  RemoveErrorClasses();
  // Check if required fields are filled
  if (!userName) {
    showError("Please enter your name", "user-name");
    return;
  }
  if (!userCompany) {
    showError("Please enter your company name", "user-company");
    return;
  }
  if (!userEmail) {
    showError("Please enter your email", "user-email");
    return;
  }
  if (!userSubject) {
    showError("Please enter the subject", "user-subject");
    return;
  }
  if (!userMessage) {
    showError("Please enter the message", "user-message");
    return;
  }

  // Check if the email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userEmail)) {
    showError("Please enter a valid email address", "user-email");
    return;
  }

  // Check if the Terms and Privacy Policy checkbox is checked
  if (!policyCheckbox.checked) {
    const inputField = document
      .querySelector(".policy__label")
      .closest(".policy");
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.innerHTML = "Please enter a checked policy";

    inputField.classList.add("error");
    inputField.appendChild(errorDiv);
    return;
  }

  // If all validations pass, submit the form
  alert("Form submitted successfully!");
  form.submit();
});

// Remove error classes from all inputs
function RemoveErrorClasses() {
  const inputFields = document.querySelectorAll(".input-group");
  inputFields.forEach((input) => {
    input.classList.remove("error");
  });
}

function showError(message, inputId) {
  const inputField = document
    .querySelector(`#${inputId}`)
    .closest(".input-group");
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("error");
  errorDiv.innerHTML = message;

  inputField.classList.add("error");
  inputField.appendChild(errorDiv);
}
