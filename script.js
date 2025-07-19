    const hamburger = document.querySelector('.cyber-hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.setAttribute('data-theme', currentTheme);
            updateThemeIcon();
        }

        themeToggle.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'light') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
            updateThemeIcon();
        });

        function updateThemeIcon() {
            if (body.getAttribute('data-theme') === 'light') {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjusted to header height
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Animate skill bars on scroll
        const animateSkillBars = () => {
            const skillBars = document.querySelectorAll('.cyber-progress');
            const skillsSection = document.querySelector('.skills');
            
            if (skillsSection) {
                const sectionPosition = skillsSection.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (sectionPosition < screenPosition) {
                    skillBars.forEach(bar => {
                        const width = bar.parentElement.previousElementSibling.querySelector('.cyber-value').textContent;
                        bar.style.width = width;
                    });
                }
            }
        };

        window.addEventListener('scroll', animateSkillBars);
        window.addEventListener('load', animateSkillBars);

        // Form Submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form values
                const name = contactForm.querySelector('input[type="text"]').value;
                const email = contactForm.querySelector('input[type="email"]').value;
                const message = contactForm.querySelector('textarea').value;
                
                // Here you would typically send the form data to a server
                console.log({ name, email, message });
                
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            });
        }

        // Resume Button
        const resumeBtn = document.getElementById('resume-btn');
        if (resumeBtn) {
            resumeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                // Replace with your actual resume link
                window.open('path/to/your/resume.pdf', '_blank');
            });
        }

        // Update current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Typing Effect
        const typewriterElement = document.querySelector('.typewriter');
        if (typewriterElement) {
            const texts = [
                "I AM SOHA HASSAN ",
                "COMPUTER SCIENTIST", 
                "WEB DEVELOPER",
                "TECH ENTHUSIAST"
            ];
            let currentText = 0;
            let charIndex = 0;
            let isDeleting = false;
            let isEnd = false;
            
            function type() {
                const fullText = texts[currentText];
                
                if (isDeleting) {
                    typewriterElement.textContent = fullText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typewriterElement.textContent = fullText.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                if (!isDeleting && charIndex === fullText.length) {
                    isEnd = true;
                    setTimeout(() => {
                        isDeleting = true;
                        type();
                    }, 2000);
                    return;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    currentText = (currentText + 1) % texts.length;
                    isEnd = false;
                }
                
                const speed = isDeleting ? 50 : isEnd ? 100 : 150;
                setTimeout(type, speed);
            }
            
            setTimeout(type, 1000);
        }

        // Animate elements on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.slide-up, .fade-in');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animation
        document.querySelectorAll('.slide-up, .fade-in').forEach(element => {
            element.style.opacity = '0';
            if (element.classList.contains('slide-up')) {
                element.style.transform = 'translateY(40px)'; // Reduced distance
            }
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
