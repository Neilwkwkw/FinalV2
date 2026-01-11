document.querySelectorAll(".contact-form").forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = form.querySelector("input[type='email']").value;

    alert(
      "Thankyou for your feedback and concern. We will look for it and send to your account: " +
        email +
        " for our respond respond"
    );
    form.reset();
  });
});
