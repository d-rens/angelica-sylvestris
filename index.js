document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    let isMenuOpen = false;

    // Event listener for hamburger button click
    hamburgerButton.addEventListener('click', function() {
        // Toggle mobile menu visibility
        if (!isMenuOpen) {
            mobileMenu.style.display = 'block';
            hamburgerButton.classList.add('active'); // Add class to button
            isMenuOpen = true;
        } else {
            mobileMenu.style.display = 'none';
            hamburgerButton.classList.remove('active'); // Remove class from button
            isMenuOpen = false;
        }
        console.log('Hamburger button clicked');
    });

    // Function to check screen width and show/hide mobile menu accordingly
    function checkScreenWidth() {
        if (window.innerWidth <= 600 && !isMenuOpen) {
            mobileMenu.style.display = 'none';
            console.log('Screen width:', window.innerWidth, 'Mobile menu hidden');
        }
    }

    // Initial check of screen width
    checkScreenWidth();

    // Event listener for window resize to adjust mobile menu visibility
    window.addEventListener('resize', function() {
        checkScreenWidth();
    });

    // Debugging: Log whether the button and menu are correctly selected
    console.log('Hamburger button:', hamburgerButton);
    console.log('Mobile menu:', mobileMenu);
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
    document.getElementById('confirmation').style.display = 'block'; // Zeigt die Bestätigungsnachricht an
});
