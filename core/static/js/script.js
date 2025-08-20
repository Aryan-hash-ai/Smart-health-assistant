document.addEventListener('DOMContentLoaded', function() {
            // Fade-in animation observer
            const fadeInElements = document.querySelectorAll('.fade-in');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            fadeInElements.forEach(el => {
                observer.observe(el);
            });

            // Modal functionality
            const bookingModal = document.getElementById('booking-modal');
            const bookNowBtns = document.querySelectorAll('.book-now-btn');
            const closeModalBtn = document.getElementById('close-modal-btn');
            const bookingForm = document.getElementById('booking-form');
            const bookingFormContainer = document.getElementById('booking-form-container');
            const successMessage = document.getElementById('success-message');
            const closeSuccessBtn = document.getElementById('close-success-btn');

            const openModal = () => bookingModal.classList.remove('hidden');
            const closeModal = () => {
                bookingModal.classList.add('hidden');
                // Reset form for next time
                setTimeout(() => {
                    bookingFormContainer.classList.remove('hidden');
                    successMessage.classList.add('hidden');
                    bookingForm.reset();
                }, 300); // delay to allow closing animation
            }

            bookNowBtns.forEach(btn => btn.addEventListener('click', openModal));
            closeModalBtn.addEventListener('click', closeModal);
            closeSuccessBtn.addEventListener('click', closeModal);
            
            bookingModal.addEventListener('click', (e) => {
                if (e.target === bookingModal) {
                    closeModal();
                }
            });

            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                bookingFormContainer.classList.add('hidden');
                successMessage.classList.remove('hidden');
            });

            // FAQ Accordion
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                const icon = question.querySelector('i');

                question.addEventListener('click', () => {
                    const isVisible = answer.style.maxHeight;
                    
                    // Close all other answers
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.querySelector('.faq-answer').style.maxHeight = null;
                             otherItem.querySelector('.faq-question i').classList.remove('rotate-180');
                        }
                    });

                    // Toggle current answer
                    if (isVisible) {
                        answer.style.maxHeight = null;
                        icon.classList.remove('rotate-180');
                    } else {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                        icon.classList.add('rotate-180');
                    }
                });
            });
        });