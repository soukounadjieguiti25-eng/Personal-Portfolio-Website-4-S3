
// Welcome message
console.log("Welcome to Soukouna's Portfolio!");

// Select navigation elements
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Select all navigation links
const navigationLinks = document.querySelectorAll('.nav-links a');

// Mobile menu functionality
if (menuToggle && navLinks) {

    // Open and close mobile menu
    menuToggle.addEventListener('click', function() {

        navLinks.classList.toggle('active');

        const isOpen = navLinks.classList.contains('active');

        menuToggle.setAttribute('aria-expanded', isOpen);

        menuToggle.textContent = isOpen ? '✕' : '☰';

    });

    // Close menu after clicking a navigation link
    navigationLinks.forEach(function(link) {

        link.addEventListener('click', function() {

            navLinks.classList.remove('active');

            menuToggle.setAttribute('aria-expanded', 'false');

            menuToggle.textContent = '☰';

            console.log("Navigation to: " + link.textContent.trim());

        });

    });

}
