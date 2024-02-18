document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle mobile menu
    function toggleMobileMenu() {
        const menu = document.getElementById('menu');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    }

    // Event listener for mobile menu toggle button
    document.getElementById('toggleMenu').addEventListener('click', function() {
        toggleMobileMenu();
    });

    // Close mobile menu when a menu item is clicked (for better user experience)
    const menuItems = document.querySelectorAll('#menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (!document.getElementById('toggleMenu').classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    });
});
