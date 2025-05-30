// script.js - Main page script
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.hash !== '') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would normally send the data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show a simple alert for demonstration
            alert(`Thank you ${name}! Your message has been received.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Check if the user is logged in (for redirecting to project files)
    const isLoggedIn = localStorage.getItem('ecochef_logged_in');
    const projectFilesBtn = document.querySelector('a[href="auth.html"]');
    
    if (isLoggedIn === 'true' && projectFilesBtn) {
        // If logged in, redirect directly to project files
        projectFilesBtn.href = 'project-files.html';
    }
});