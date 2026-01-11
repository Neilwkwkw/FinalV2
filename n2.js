document.querySelectorAll(".checkout-form").forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your purchase! We will contact you soon.");
  });
});
