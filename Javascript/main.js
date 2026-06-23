document.addEventListener('DOMContentLoaded', function () {
  // Hamburger menu
  var hamburger = document.getElementById('hamburger');
  var nav = document.querySelector('.header__navigation');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  // Active nav link — mark SERVICES when on services.html
  var isServices = window.location.pathname.includes('services');
  document.querySelectorAll('.header__nav-item').forEach(function (link) {
    var href = link.getAttribute('href') || '';
    if (isServices && href.includes('services.html')) {
      link.closest('li').classList.add('active');
    }
  });
});
