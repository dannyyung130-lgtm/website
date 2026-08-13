document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        // Get the account created during registration
        const savedUser = localStorage.getItem("acejambUser");

        if (!savedUser) {
            alert("No account found. Please register first.");
            return;
        }

        const user = JSON.parse(savedUser);

        // Check email
        if (email.toLowerCase() !== user.email.toLowerCase()) {
            alert("Incorrect email or password.");
            return;
        }

        // Check password
        if (password !== user.password) {
            alert("Incorrect email or password.");
            return;
        }

        // Save login status
        localStorage.setItem("acejambLoggedIn", "true");
        localStorage.setItem(
            "acejambCurrentUser",
            JSON.stringify(user)
        );

        alert("Login successful! Welcome " + user.fullname + " 🎉");

        // Go to home page
        window.location.href = "home.html";

    });

});