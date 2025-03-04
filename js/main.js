// Main JavaScript file with all functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (mobileToggle) {
                    mobileToggle.textContent = '☰';
                }
            }

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // UNIFIED Accordion/FAQ functionality
    // This handles both homepage accordions and the FAQ page items
    const allAccordionItems = document.querySelectorAll('.accordion-item, .faq-item');
    
    if (allAccordionItems.length > 0) {
        // Initialize - hide all content sections
        allAccordionItems.forEach(item => {
            const content = item.querySelector('.accordion-content, .faq-answer');
            if (content) {
                if (content.classList.contains('accordion-content')) {
                    content.style.maxHeight = null;
                } else {
                    content.style.display = 'none';
                }
            }
        });
        
        // Add click event to all headers
        allAccordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header, .faq-question');
            if (header) {
                header.addEventListener('click', () => {
                    // Check if this item is already active
                    const isActive = item.classList.contains('active');

                    // Close all accordion items
                    allAccordionItems.forEach(accItem => {
                        accItem.classList.remove('active');
                        const content = accItem.querySelector('.accordion-content, .faq-answer');
                        if (content) {
                            if (content.classList.contains('accordion-content')) {
                                content.style.maxHeight = null;
                            } else {
                                content.style.display = 'none';
                            }
                        }
                    });

                    // Open the clicked item if it was not already active
                    if (!isActive) {
                        item.classList.add('active');
                        const content = item.querySelector('.accordion-content, .faq-answer');
                        if (content) {
                            if (content.classList.contains('accordion-content')) {
                                content.style.maxHeight = content.scrollHeight + 'px';
                            } else {
                                content.style.display = 'block';
                            }
                        }
                    }
                });
            }
        });
    }
    
    // Pricing toggle between monthly and annual
    const pricingToggle = document.getElementById('pricing-toggle');
    if (pricingToggle) {
        const monthlyLabel = document.querySelector('.monthly-label');
        const annualLabel = document.querySelector('.annual-label');
        const monthlyPrices = document.querySelectorAll('.monthly-price');
        const annualPrices = document.querySelectorAll('.annual-price');
        
        pricingToggle.addEventListener('change', function() {
            if (this.checked) {
                // Annual pricing
                monthlyPrices.forEach(price => price.style.display = 'none');
                annualPrices.forEach(price => price.style.display = 'block');
                
                if (monthlyLabel) monthlyLabel.classList.remove('toggle-active');
                if (annualLabel) annualLabel.classList.add('toggle-active');
            } else {
                // Monthly pricing
                monthlyPrices.forEach(price => price.style.display = 'block');
                annualPrices.forEach(price => price.style.display = 'none');
                
                if (monthlyLabel) monthlyLabel.classList.add('toggle-active');
                if (annualLabel) annualLabel.classList.remove('toggle-active');
            }
        });
    }

    // Blog filtering and search functionality
    const blogGrid = document.getElementById('blogGrid');
    if (blogGrid) {
        const blogCards = document.querySelectorAll('.blog-card');
        const tags = document.querySelectorAll('.tag');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const noResults = document.getElementById('noResults');
        const clearFilters = document.getElementById('clearFilters');
        
        // Tag filtering
        tags.forEach(tag => {
            tag.addEventListener('click', function() {
                // Update active tag
                tags.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const tagFilter = this.getAttribute('data-tag');
                filterContent(tagFilter, searchInput ? searchInput.value : '');
            });
        });
        
        // Search functionality
        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', function() {
                const activeTag = document.querySelector('.tag.active');
                if (activeTag) {
                    const tagFilter = activeTag.getAttribute('data-tag');
                    filterContent(tagFilter, searchInput.value);
                }
            });
            
            // Enter key in search input
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    const activeTag = document.querySelector('.tag.active');
                    if (activeTag) {
                        const tagFilter = activeTag.getAttribute('data-tag');
                        filterContent(tagFilter, searchInput.value);
                    }
                }
            });
        }
        
        // Clear filters
        if (clearFilters) {
            clearFilters.addEventListener('click', function() {
                if (searchInput) searchInput.value = '';
                const allTag = document.querySelector('.tag[data-tag="all"]');
                if (allTag) {
                    tags.forEach(t => t.classList.remove('active'));
                    allTag.classList.add('active');
                    filterContent('all', '');
                }
            });
        }
        
        // Filter blog posts based on tag and search query
        function filterContent(tagFilter, searchQuery) {
            let visibleCount = 0;
            
            blogCards.forEach(card => {
                const cardTags = card.getAttribute('data-tags') ? card.getAttribute('data-tags').split(',') : [];
                const cardTitle = card.querySelector('.blog-title') ? card.querySelector('.blog-title').textContent.toLowerCase() : '';
                const cardExcerpt = card.querySelector('.blog-excerpt') ? card.querySelector('.blog-excerpt').textContent.toLowerCase() : '';
                
                // Check if card matches tag filter
                const matchesTag = tagFilter === 'all' || cardTags.includes(tagFilter);
                
                // Check if card matches search query
                const searchLower = searchQuery ? searchQuery.toLowerCase() : '';
                const matchesSearch = searchLower === '' || 
                                    cardTitle.includes(searchLower) || 
                                    cardExcerpt.includes(searchLower);
                
                // Show/hide card based on filters
                if (matchesTag && matchesSearch) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show/hide no results message
            if (visibleCount === 0 && noResults) {
                noResults.style.display = 'block';
                blogGrid.style.display = 'none';
            } else if (noResults) {
                noResults.style.display = 'none';
                blogGrid.style.display = 'grid';
            }
        }
    }

    // Form validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const emailInput = document.getElementById('email');
            if (emailInput) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailInput.value)) {
                    e.preventDefault();
                    alert('Please enter a valid email address.');
                    emailInput.focus();
                }
            }
        });
    }
    
    // Add smooth fade-in effect for content sections
    const fadeElements = document.querySelectorAll('.service-card, .process-step, .blog-card, .pricing-plan');
    if (fadeElements.length > 0) {
        fadeElements.forEach(el => el.classList.add('fade-in'));
    }
    
    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Handle active navigation links based on current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            
            // Check if link path matches current page
            if (linkPath === currentPath || 
                (currentPath.includes(linkPath) && linkPath !== '/')) {
                link.classList.add('current');
            }
        });
    }
    
    // Lazy load images for better performance
    const lazyImages = document.querySelectorAll('.lazy-image');
    if ('IntersectionObserver' in window && lazyImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Current year for copyright
document.addEventListener('DOMContentLoaded', function() {
    const yearElements = document.querySelectorAll('.current-year');
    if (yearElements.length > 0) {
        const currentYear = new Date().getFullYear();
        yearElements.forEach(el => {
            el.textContent = currentYear;
        });
    }
});
