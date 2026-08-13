// ==========================
// PREMIUM BUTTON
// ==========================

function startPremium() {

    const loggedIn =
        localStorage.getItem("acejambLoggedIn");

    if (loggedIn !== "true") {

        alert(
            "Please login or create an AceJAMB account before getting Premium."
        );

        window.location.href = "index.html";

        return;
    }


    alert(
        "Premium payments are coming soon! 🚀\n\n" +
        "Your account is ready. We will connect a secure payment system when Premium is launched."
    );

}



// ==========================
// FAQ
// ==========================

function toggleFAQ(button) {

    const item =
        button.parentElement;

    const currentlyOpen =
        item.classList.contains("open");


    // Close all FAQs

    document
        .querySelectorAll(".faq-item")
        .forEach(function (faq) {

            faq.classList.remove("open");

            const span =
                faq.querySelector("button span");

            span.textContent = "+";

        });


    // Open selected FAQ

    if (!currentlyOpen) {

        item.classList.add("open");

        const span =
            button.querySelector("span");

        span.textContent = "−";

    }

}