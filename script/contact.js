const form = document.querySelector(".contact-form");
const name = document.querySelector("#inputName");
const email = document.querySelector("#inputEmail");
const subject = document.querySelector("#inputSubject");
const message = document.querySelector("#textArea");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const textError = document.querySelector("#textError");

function validateForm() {
    event.preventDefault();

    if (name.value.trim().length > 0) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (subject.value.trim().length > 0) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (message.value.trim().length > 10) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }


}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}