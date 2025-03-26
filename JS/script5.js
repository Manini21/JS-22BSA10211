function validateForm() {
    let isValid = true;

    // Name validation
    let name = document.getElementById("name").value.trim();
    let nameError = document.getElementById("nameError");
    if (name === "") {
        nameError.innerText = "This field is required";
        document.getElementById("name").classList.add("error");
        isValid = false;
    } else {
        nameError.innerText = "";
        document.getElementById("name").classList.remove("error");
    }

    // Email validation
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        emailError.innerText = "A valid email address is required";
        document.getElementById("email").classList.add("error");
        isValid = false;
    } else {
        emailError.innerText = "";
        document.getElementById("email").classList.remove("error");
    }

    // Website validation
    let website = document.getElementById("website").value.trim();
    let websiteError = document.getElementById("websiteError");
    let websitePattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/;
    if (!website.match(websitePattern)) {
        websiteError.innerText = "A valid URL is required";
        document.getElementById("website").classList.add("error");
        isValid = false;
    } else {
        websiteError.innerText = "";
        document.getElementById("website").classList.remove("error");
    }

    // Message validation
    let message = document.getElementById("message").value.trim();
    let messageError = document.getElementById("messageError");
    if (message === "") {
        messageError.innerText = "This field is required";
        document.getElementById("message").classList.add("error");
        isValid = false;
    } else {
        messageError.innerText = "";
        document.getElementById("message").classList.remove("error");
    }

    return isValid;
}
