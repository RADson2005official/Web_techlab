document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    // Function to toggle navbar class on scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
    
    // Initial check on page load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
