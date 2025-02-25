document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".form-step");
    const nextButtons = document.querySelectorAll(".button");
    const prevButtons = document.querySelectorAll(".prev-btn");
    const stepsIndicator = document.querySelectorAll(".step");
    const form = document.getElementById("checkoutForm");
    const successMessage = document.getElementById("successMessage");

    let currentStep = 0;

    function showStep(step) {
        steps.forEach((s, index) => {
            s.classList.toggle("active", index === step);
        });

        stepsIndicator.forEach((indicator, index) => {
            indicator.classList.toggle("active", index <= step);
        });
    }

    nextButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (validateForm(steps[index])) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentStep--;
            showStep(currentStep);
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateForm(steps[currentStep])) {
            form.style.display = "none";
            successMessage.classList.remove("hidden");
            window.location.href = "../html/success.html";

        }
    });

    function validateForm(step) {
        let inputs = step.querySelectorAll("input, select");
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                input.style.border = "1px solid red";
                valid = false;
            } else {
                input.style.border = "1px solid #ccc";
            }
        });

        return valid;
    }
});
