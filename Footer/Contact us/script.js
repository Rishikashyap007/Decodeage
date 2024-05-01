function sendMessage() {
    const name = document.getElementById("name");
    const userType = document.getElementById("user-type");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const responseText = document.getElementById("response-text");

    if (name.value && userType.value && email.value && message.value) {
        // Replace this with actual server-side sent message handling.
        responseText.textContent = "Message sent successfully!";
        responseText.style.color = "green";
    } else {
        responseText.textContent = "Please fill in all the fields.";
        responseText.style.color = "red";
    }
}