function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleBtn = event.target;
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        passwordField.type = "password";
        toggleBtn.textContent = "Show";
    }
}
document.getElementById("registerForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!name || !email || !password) {
        alert("All fields are required!");
        event.preventDefault();
        return;
    }
    if (!gmailRegex.test(email)) {
        alert("Please enter a valid Gmail address!");
        event.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});
   


//api
document.addEventListener("DOMContentLoaded", function () {
    async function updateLocationsOnly() {
        try {
          const response = await fetch("https://corsproxy.io/?https://www.apicountries.com/countries");
          const countries = await response.json();
      
          const locationElements = document.querySelectorAll(".card .location");
      
          locationElements.forEach((el, index) => {
            const country = countries[index];
            const continent = country.subregion || "Unknown";
            const capital = country.capital || "Unknown";
            el.textContent = `${capital}, ${continent}`;
          });
        } catch (err) {
          console.error("Failed to update locations:", err);
        }
      }
    updateLocationsOnly();
  });
//api





document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    if (localStorage.getItem("cookieAccepted") === "true") {
      banner.style.display = "none";
    }
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookieAccepted", "true");
      banner.style.display = "none";
    });
  });






  window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  const burgerMenu = document.getElementById('burger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const header = document.getElementById('main-header');
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const registerForm = document.getElementById('registerForm');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

const mobileNavLinks = document.querySelectorAll('.mobile-nav .navText');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

document.addEventListener('click', function(e) {
    if (!burgerMenu.contains(e.target) && !mobileNav.contains(e.target)) {
        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});