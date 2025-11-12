// Booking form submission
document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for booking! We'll contact you soon.");
});

// Contact form submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for your message! We'll reply soon.");
  });
}
