document.addEventListener('DOMContentLoaded', function() {
    // Form validation (for contact form)
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            if (!name.value.trim()) {
                isValid = false;
                alert('Please enter your name');
            }
            
            if (!email.value.trim()) {
                isValid = false;
                alert('Please enter your email');
            } else if (!isValidEmail(email.value)) {
                isValid = false;
                alert('Please enter a valid email address');
            }
            
            if (!message.value.trim()) {
                isValid = false;
                alert('Please enter your message');
            }
            
            if (isValid) {
                // Here you would typically send the form data to a server
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
