function validateLogin() {
    let isValid = true;

    // Username validation
    let username = document.getElementById("username").value.trim();
    let usernameError = document.getElementById("usernameError");

    if (username === "") {
        usernameError.innerText = "Username is required";
        isValid = false;
    } else {
        usernameError.innerText = "";
    }

    // Password validation
    let password = document.getElementById("password").value.trim();
    let passwordError = document.getElementById("passwordError");

    if (password === "") {
        passwordError.innerText = "Password is required";
        isValid = false;
    } else {
        passwordError.innerText = "";
    }

    return isValid;
}
