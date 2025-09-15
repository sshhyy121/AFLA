// Quote Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(quoteForm);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Simple form validation
            if (!formObject.name || !formObject.email || !formObject.phone || !formObject.product) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formObject.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[\+]?[0-9\s\-\(\)\.]{7,}$/;
            if (!phoneRegex.test(formObject.phone)) {
                alert('Please enter a valid phone number.');
                return;
            }
            
            // Show loading state
            const submitBtn = quoteForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                alert('Thank you for your inquiry! We will contact you within 24 hours with a customized quote.');
                quoteForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
            
            // In a real application, you would send the data to your server here
            // Example:
            // fetch('/api/quote-request', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formObject)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Thank you! We will contact you soon.');
            //     quoteForm.reset();
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     alert('Sorry, there was an error submitting your request. Please try again.');
            // })
            // .finally(() => {
            //     submitBtn.textContent = originalText;
            //     submitBtn.disabled = false;
            // });
        });
    }
    
    // Add input event listeners for real-time validation
    const inputs = quoteForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#e74c3c';
            } else if (this.type === 'email' && this.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                this.style.borderColor = emailRegex.test(this.value) ? '#27ae60' : '#e74c3c';
            } else if (this.value.trim()) {
                this.style.borderColor = '#27ae60';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = '#0066cc';
        });
    });
});