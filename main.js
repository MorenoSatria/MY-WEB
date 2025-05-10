document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!email || !name || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    alert("Thank you for your message, " + name + "!");
    this.reset();
  });
});
