function togglePassword1() {
    var passwordField = document.getElementById("password1");
    if (passwordField.type === "password") {
        passwordField.type = "text";  // Show password
    } else {
        passwordField.type = "password"; // Hide password
    }
}

function togglePassword2() {
    var passwordField = document.getElementById("password2");
    if (passwordField.type === "password") {
        passwordField.type = "text";  // Show password
    } else {
        passwordField.type = "password"; // Hide password
    }
}