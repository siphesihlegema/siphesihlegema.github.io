// Simple interactive feedback for contact form (non-functional placeholder)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you for reaching out, Siphesihle will get back to you soon!");
      form.reset();
    });
  }
});
