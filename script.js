// Particles.js configuration
document.addEventListener('DOMContentLoaded', function() {
    // if (typeof particlesJS !== 'undefined') {
    //     particlesJS('particles-js', {
    //         particles: {
    //             number: { value: 80, density: { enable: true, value_area: 800 } },
    //             color: { value: "#00c896" },
    //             shape: { type: "circle" },
    //             opacity: { value: 0.5, random: false },
    //             size: { value: 3, random: true },
    //             line_linked: {
    //                 enable: true,
    //                 distance: 150,
    //                 color: "#00c896",
    //                 opacity: 0.4,
    //                 width: 1
    //             },
    //             move: {
    //                 enable: true,
    //                 speed: 2,
    //                 direction: "none",
    //                 random: false,
    //                 straight: false,
    //                 out_mode: "out",
    //                 bounce: false
    //             }
    //         },
    //         interactivity: {
    //             detect_on: "canvas",
    //             events: {
    //                 onhover: { enable: true, mode: "grab" },
    //                 onclick: { enable: true, mode: "push" },
    //                 resize: true
    //             },
    //             modes: {
    //                 grab: { distance: 140, line_linked: { opacity: 1 } },
    //                 push: { particles_nb: 4 }
    //             }
    //         },
    //         retina_detect: true
    //     });
    // }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// About tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        this.classList.add('active');
        document.getElementById(tabId + '-tab').classList.add('active');
    });
});

// Testimonial slider
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');

testimonialDots.forEach(dot => {
    dot.addEventListener('click', function() {
        const slideIndex = this.getAttribute('data-slide');
        
        // Remove active class from all dots and slides
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        
        // Add active class to clicked dot and corresponding slide
        this.classList.add('active');
        testimonialSlides[slideIndex].classList.add('active');
    });
});

// Auto-rotate testimonials
let currentSlide = 0;
const totalSlides = testimonialSlides.length;

function rotateTestimonials() {
    
    // Remove active class from all dots and slides
    testimonialDots.forEach(dot => dot.classList.remove('active'));
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to current slide and dot
    currentSlide = (currentSlide + 1) % totalSlides;
    //testimonialDots[currentSlide].classList.add('active');
    //testimonialSlides[currentSlide].classList.add('active');
}

// Set interval for auto-rotation (every 5 seconds)
setInterval(rotateTestimonials, 5000);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        if (mobileMenuBtn.querySelector('i').classList.contains('fa-times')) {
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const header = document.getElementById('header');
const backToTop = document.getElementById('backToTop');
const sections = document.querySelectorAll('section');
const aboutText = document.querySelector('.about-text');
const aboutImage = document.querySelector('.about-image');
const skillCards = document.querySelectorAll('.skill-card');
const serviceCards = document.querySelectorAll('.service-card');
const projectCards = document.querySelectorAll('.project-card');
const blogCards = document.querySelectorAll('.blog-card');
const educationCards = document.querySelectorAll('.education-card');
const timelineItems = document.querySelectorAll('.timeline-item');
const contactInfo = document.querySelector('.contact-info');
const contactForm = document.querySelector('.contact-form');

// Typing effect
function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = '';
    
    let i = 0;
    const timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Animated counters
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 20); // Update every 20ms
    let current = 0;
    
    const timer = setInterval(function() {
        current += step;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 20);
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Handle scroll events
function handleScroll() {
    // Header scroll effect
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Back to top button
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

    // Animate sections on scroll
    sections.forEach(section => {
        if (isInViewport(section)) {
            // About section animations
            if (section.id === 'about') {
                aboutText.classList.add('animate');
                aboutImage.classList.add('animate');
            }

            // Skills section animations
            if (section.id === 'skills') {
                skillCards.forEach(card => {
                    setTimeout(() => {
                        card.classList.add('animate');
                        const progressBar = card.querySelector('.progress-bar');
                        if (progressBar) {
                            progressBar.style.width = progressBar.getAttribute('data-width') + '%';
                        }
                    }, parseInt(card.getAttribute('data-delay')) || 0);
                });
            }

            // Services section animations
            if (section.id === 'services') {
                serviceCards.forEach(card => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, parseInt(card.getAttribute('data-delay')) || 0);
                });
            }

            // Projects section animations
            if (section.id === 'projects') {
                projectCards.forEach(card => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, parseInt(card.getAttribute('data-delay')) || 0);
                });
            }

            // Blog section animations
            if (section.id === 'blog') {
                blogCards.forEach(card => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, parseInt(card.getAttribute('data-delay')) || 0);
                });
            }

            // Education section animations
            if (section.id === 'education') {
                educationCards.forEach(card => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, parseInt(card.getAttribute('data-delay')) || 0);
                });
            }

            // Experience section animations
            if (section.id === 'experience') {
                timelineItems.forEach(item => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, parseInt(item.getAttribute('data-delay')) || 0);
                });
            }

            // Contact section animations
            if (section.id === 'contact') {
                
                contactInfo.classList.add('animate');
            }

            // Stats section animations
            if (section.classList.contains('stats')) {
                const statNumbers = section.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    if (!stat.classList.contains('animated')) {
                        animateCounter(stat);
                        stat.classList.add('animated');
                    }
                });
            }
        }
    });
}

// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Form submission
//const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        formMessage.textContent = 'Message sent successfully!';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 3 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 3000);
    });
}

// Initialize
window.addEventListener('load', function() {
    // Start typing effect
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        typeEffect(typingText, 100);
    }
    
    // Initial scroll check
    handleScroll();
});

// Scroll event listener
window.addEventListener('scroll', handleScroll);
// 监听窗口大小变化，调整iframe缩放比例
window.addEventListener('resize', function() {
    const iframe = document.querySelector('iframe');
    const windowWidth = window.innerWidth;
    
    const scaleFactor = (windowWidth) / 1500; // 1000是iframe的原始宽度
    
    // 设置iframe的缩放比例
    iframe.style.transform = `scale(${scaleFactor})`;
    iframe.style.transformOrigin = 'top left';
});

// 页面加载时立即执行一次缩放
window.addEventListener('load', function() {
    const iframe = document.querySelector('iframe');
    const windowWidth = window.innerWidth;
    const scaleFactor = (windowWidth) / 1500;
    
    iframe.style.transform = `scale(${scaleFactor})`;
    iframe.style.transformOrigin = 'top left';
});
