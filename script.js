const form=
document.getElementById("giveaway-form");
const message =
document.getElementById("success-message");

form.addEventlistener("submit", function(event){
    event.preventDefault();

    message.textContent= "Your giveaway entry has been received! Good luck!";

    form.reset();
})