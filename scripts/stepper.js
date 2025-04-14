let currentStep = -1;
const isMobileOrTablet = () => window.innerWidth <= 1199;
if (isMobileOrTablet) {
  function updateStep(newStep) {
    const steps = document.querySelectorAll(".step");
    const lines = document.querySelectorAll(".progress-line");

    steps.forEach((step, index) => {
      step.classList.toggle("active", index <= newStep);
    });

    lines.forEach((line, index) => {
      line.style.backgroundColor = index < newStep ? "#B68867" : "#444";
    });

    currentStep = newStep;
  }
  const stepBar = document.querySelector(".step-progress");
  const btnProceed = document.querySelector(".btn-proceed");
  const btnExtras = document.querySelector(".btn-extras");
  const btnInsurance = document.querySelector(".btn-insurance");
  const btnPay = document.querySelector(".btn-pay");

  btnProceed.addEventListener("click", () => {
    stepBar.style.display = "flex";
    updateStep(0);
  });

  btnExtras.addEventListener("click", () => {
    updateStep(1);
  });

  btnInsurance.addEventListener("click", () => {
    updateStep(2);
  });

  btnPay.addEventListener("click", () => {
    updateStep(3);
  });
}
