document.addEventListener("DOMContentLoaded", () => {
  const carInfo = document.querySelector(".car-info");
  const extras = document.querySelector(".extras");
  const insurance = document.querySelector(".insurance");
  const orderForm = document.querySelector(".order-form");

  const step1Btn = document.querySelector(".btn-step-1");
  const step2Btn = document.querySelector(".btn-step-2");
  const step3Btn = document.querySelector(".btn-step-3");

  const isMobileOrTablet = () => window.innerWidth <= 1199;

  const showAllSections = () => {
    carInfo.style.display = "flex";
    extras.style.display = "block";
    insurance.style.display = "block";
    orderForm.style.display = "block";
    step1Btn.style.display = "none";
    step2Btn.style.display = "none";
    step3Btn.style.display = "none";
  };

  const initFlow = () => {
    if (isMobileOrTablet()) {
      carInfo.style.display = "flex";
      extras.style.display = "none";
      insurance.style.display = "none";
      orderForm.style.display = "none";

      step1Btn.style.display = "flex";
      step2Btn.style.display = "none";
      step3Btn.style.display = "none";

      step1Btn?.addEventListener("click", () => {
        extras.style.display = "block";
        carInfo.style.display = "none";
        step1Btn.style.display = "none";
        step2Btn.style.display = "flex";
        step3Btn.style.display = "none";
      });

      step2Btn?.addEventListener("click", () => {
        insurance.style.display = "block";
        extras.style.display = "none";
        step1Btn.style.display = "none";
        step2Btn.style.display = "none";
        step3Btn.style.display = "flex";
      });

      step3Btn?.addEventListener("click", () => {
        orderForm.style.display = "block";
        insurance.style.display = "none";
        step1Btn.style.display = "none";
        step2Btn.style.display = "none";
        step3Btn.style.display = "none";
      });
    } else {
      showAllSections();
    }
  };

  initFlow();

  // window.addEventListener("resize", () => {
  //   location.reload();
  // });
});
