document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    emailjs.send("service_7v6o1ma", "template_8qjofn6", {
      name: document.getElementById("name-field").value,  
      email: document.getElementById("email-field").value,
      title: document.getElementById("subject-field").value,
      message: document.getElementById("message-field").value,
  })
  
    .then(function(response) {
      alert("Message sent successfully!");
    }, function(error) {
      alert("Failed to send message. Please try again.");
    });
  });