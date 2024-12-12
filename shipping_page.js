// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  const shippingForm = document.querySelector("form");
  const useForBillingCheckbox = document.getElementById("useForBilling");

  // Helper function to validate input fields
  function validateInput(input) {
    if (!input.value.trim()) {
      input.classList.add("error");
      return false;
    }
    input.classList.remove("error");
    return true;
  }

  // Form submission handler
  shippingForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission for validation

    const inputs = shippingForm.querySelectorAll(
      "input[required], select[required]"
    );
    let isValid = true;

    // Validate all required fields
    inputs.forEach((input) => {
      if (!validateInput(input)) {
        isValid = false;
      }
    });

    // If all fields are valid, proceed to the billing page
    if (isValid) {
      alert("Form submitted successfully!");
      shippingForm.submit();
    } else {
      alert("Please fill out all required fields correctly.");
    }
  });

  // Event listener for "Use address for billing" checkbox
  useForBillingCheckbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      alert("The shipping address will also be used for billing.");
    }
  });

  // Real-time validation for individual inputs
  const requiredInputs = shippingForm.querySelectorAll(
    "input[required], select[required]"
  );
  requiredInputs.forEach((input) => {
    input.addEventListener("blur", () => validateInput(input));
  });
});
