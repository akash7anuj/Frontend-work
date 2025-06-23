function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";  // Show password
    } else {
        passwordField.type = "password"; // Hide password
    }
}