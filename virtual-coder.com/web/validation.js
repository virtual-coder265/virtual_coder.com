function validateForm(form) {
  // Get input field values
  const email = form.email.value.trim();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const course = form.course.value.trim();
  const password = form.password.value.trim();
  const payment = form.payment.value.trim();

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate name
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  // Validate phone
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  // Validate course
  if (course === "") {
    alert("Please select a course.");
    return false;
  }

  // Validate password
  if (password.length < 8) {
    alert("Password must be at least 8 characters.");
    return false;
  }

  // Validate payment
  if (payment === "") {
    alert("Please select a payment plan.");
    return false;
  }

  // Validate terms and conditions checkbox
  if (!form.terms.checked) {
    alert("Please agree to the terms and conditions.");
    return false;
  }
  //insert a div to display success
  const div = document.createElement("div");
  div.innerHTML = "Thank you for signing up!";
  div.style.color = "green";
  div.style.fontWeight = "bold";
  div.style.marginTop = "10px";
  form.parentNode.insertBefore(div, form.nextSibling);

  // Reset form fields and remove success message after 5 seconds
  setTimeout(function () {
    div.remove();
  }, 5000);

  //redirect to home page
  window.location.href = "https://virtual-coder.com/web/index.html";

  form.reset();

  // If all validation passes, the form is valid
  return true;
}
