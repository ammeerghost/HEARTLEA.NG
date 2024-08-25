document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        document.getElementById('formResponse').innerText = "Thank you for your message, " + name + "!";
        document.getElementById('contactForm').reset(); // Reset form fields
    } else {
        document.getElementById('formResponse').innerText = "Please fill in all fields.";
    }
});