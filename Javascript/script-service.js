document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".service-card");
  const viewDetailsButtons = document.querySelectorAll(".view-details");
  const requestButtons = document.querySelectorAll(".request-button");
  const modal = document.getElementById("requestModal");
  const closeModal = document.querySelector(".modal .close");
  const serviceTypeInput = document.getElementById("serviceType");

  /*----- Create modal overlay -----*/
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  document.body.appendChild(overlay);
  overlay.style.display = "none";

  /*----- Handle view details button clicks -----*/
  viewDetailsButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation(); /*----- Prevent event bubbling -----*/
      const card = button.closest(".service-card");

      /*----- Remove expanded class from all other cards -----*/
      cards.forEach((c) => {
        if (c !== card) {
          c.classList.remove("expanded");
          const briefContent = c.querySelector(".brief-content");
          if (briefContent) briefContent.style.display = "flex";
        }
      });

      /*----- Toggle expanded class on clicked card -----*/
      card.classList.toggle("expanded");

      // Toggle content visibility
      const briefContent = card.querySelector(".brief-content");
      const detailedContent = card.querySelector(".detailed-content");

      if (card.classList.contains("expanded")) {
        briefContent.style.display = "none";
        detailedContent.style.display = "block";
      } else {
        briefContent.style.display = "flex";
        detailedContent.style.display = "none";
      }

      /*----- Show/hide overlay -----*/
      overlay.style.display = card.classList.contains("expanded")
        ? "block"
        : "none";
    });
  });

  /*----- Handle request button clicks -----*/
  requestButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation(); /*----- Prevent card expansion -----*/
      const card = button.closest(".service-card");
      const serviceType = card.querySelector("h2").textContent;
      serviceTypeInput.value = serviceType;
      modal.style.display = "block";
      overlay.style.display = "block";
    });
  });

  /*----- Close modal -----*/
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  /*----- Close expanded view and modal when clicking overlay -----*/
  overlay.addEventListener("click", function () {
    /*----- Close expanded cards -----*/
    cards.forEach((card) => {
      card.classList.remove("expanded");
      /*----- Reset content visibility -----*/
      const briefContent = card.querySelector(".brief-content");
      const detailedContent = card.querySelector(".detailed-content");
      if (briefContent) briefContent.style.display = "flex";
      if (detailedContent) detailedContent.style.display = "none";
    });

    /*----- Close modal -----*/
    modal.style.display = "none";
    /*----- Hide overlay -----*/
    overlay.style.display = "none";
  });

  /*----- Handle form submission -----*/
  const requestForm = document.getElementById("requestForm");
  requestForm.addEventListener("submit", function (e) {
    e.preventDefault();
    /*----- Here you would typically send the form data to your server -----*/
    alert("Thank you for your request! We will contact you soon.");
    modal.style.display = "none";
    overlay.style.display = "none";
    this.reset();
  });
});
