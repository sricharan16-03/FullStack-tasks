
function highlight(element) {
    element.style.backgroundColor = "#e6f7ff";
}

function removeHighlight(element) {
    element.style.backgroundColor = "";
}



function validateName() {
    let name = document.getElementById("name").value;
    let error = document.getElementById("nameError");

    if (name.length < 3) {
        error.innerText = "Name must be at least 3 characters";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!pattern.test(email)) {
        error.innerText = "Enter valid email";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

function validateFeedback() {
    let feedback = document.getElementById("feedback").value;
    let error = document.getElementById("feedbackError");

    if (feedback.length < 10) {
        error.innerText = "Feedback must be at least 10 characters";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

function submitForm() {

    let validName = validateName();
    let validEmail = validateEmail();
    let validFeedback = validateFeedback();

    if (validName && validEmail && validFeedback) {
        document.getElementById("successMessage").innerText = 
        "Thank you! Your feedback has been submitted.";
    } else {
        document.getElementById("successMessage").innerText = "";
        alert("Please fix errors before submitting.");
    }
}
