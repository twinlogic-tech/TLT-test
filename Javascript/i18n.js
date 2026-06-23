function setLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    var text = translations[lang] && translations[lang][key];
    if (text !== undefined) {
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem("tlt-lang", lang);
}

document.addEventListener("DOMContentLoaded", function () {
  var saved = localStorage.getItem("tlt-lang") || "en";
  setLanguage(saved);
});
