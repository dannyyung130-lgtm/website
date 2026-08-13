document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.getElementById("registerForm");

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const showPassword = document.getElementById("showPassword");
    const showConfirmPassword =
        document.getElementById("showConfirmPassword");


    // ==========================
    // SHOW PASSWORD
    // ==========================

    showPassword.addEventListener("click", function () {

        if (password.type === "password") {
            password.type = "text";
            showPassword.innerHTML = "🙈";
        } else {
            password.type = "password";
            showPassword.innerHTML = "👁️";
        }

    });


    // ==========================
    // SHOW CONFIRM PASSWORD
    // ==========================

    showConfirmPassword.addEventListener("click", function () {

        if (confirmPassword.type === "password") {
            confirmPassword.type = "text";
            showConfirmPassword.innerHTML = "🙈";
        } else {
            confirmPassword.type = "password";
            showConfirmPassword.innerHTML = "👁️";
        }

    });


    // ==========================
    // REGISTER
    // ==========================

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullname =
            document.getElementById("fullname").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const passwordValue = password.value;

        const confirmPasswordValue = confirmPassword.value;

        const terms =
            document.getElementById("terms");


        // CHECK NAME

        if (fullname === "") {
            alert("Please enter your full name.");
            return;
        }


        // CHECK EMAIL

        if (email === "") {
            alert("Please enter your email.");
            return;
        }


        // CHECK PASSWORD

        if (passwordValue.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }


        // CHECK PASSWORD MATCH

        if (passwordValue !== confirmPasswordValue) {
            alert("Passwords do not match.");
            return;
        }


        // CHECK TERMS

        if (!terms.checked) {
            alert("Please agree to the Terms & Conditions.");
            return;
        }


        // ==========================
        // CREATE USER
        // ==========================

        const user = {
            fullname: fullname,
            email: email,
            password: passwordValue
        };


        localStorage.setItem(
            "acejambUser",
            JSON.stringify(user)
        );


        // ==========================
        // SEND TO LOGIN
        // ==========================

        alert("Account created successfully! 🎉");

        window.location.href = "index.html";

    });

});