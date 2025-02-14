document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".form-step");
  const stepIndicators = document.querySelectorAll(".step");
  const nextBtns = document.querySelectorAll(".button");
  const prevBtns = document.querySelectorAll(".prev-btn");
  const form = document.getElementById("multiStepForm");
  let currentStep = 0;

  function showStep(step) {
      steps.forEach((s, index) => {
          s.classList.toggle("active", index === step);
      });

      stepIndicators.forEach((s, index) => {
          s.classList.toggle("active", index === step);
      });
  }

  function validateStep(step) {
      let inputs = steps[step].querySelectorAll("input, select, textarea");
      let valid = true;

      inputs.forEach(input => {
          if (!input.value.trim()) {
              input.style.border = "2px solid red";
              valid = false;
          } else {
              input.style.border = "1px solid #ddd";
          }
      });

      return valid;
  }

  nextBtns.forEach(btn => {
      btn.addEventListener("click", () => {
          if (validateStep(currentStep)) {
              if (currentStep < steps.length - 1) {
                  currentStep++;
                  showStep(currentStep);
              }
          }
      });
  });

  prevBtns.forEach(btn => {
      btn.addEventListener("click", () => {
          if (currentStep > 0) {
              currentStep--;
              showStep(currentStep);
          }
      });
  });

  form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent actual form submission

      if (validateStep(currentStep)) {
          console.log("Form submitted successfully! Redirecting...");

          window.location.href = "../html/success.html";
      }
  });

  showStep(currentStep);
});
