// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
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

            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.textContent = '☰';
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

    // FAQ Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            if (header) {
                header.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');

                    // Close all accordion items
                    accordionItems.forEach(accItem => {
                        accItem.classList.remove('active');
                        const content = accItem.querySelector('.accordion-content');
                        if (content) {
                            content.style.maxHeight = null;
                        }
                    });

                    // Open the clicked item if it was not already active
                    if (!isActive) {
                        item.classList.add('active');
                        const content = item.querySelector('.accordion-content');
                        if (content) {
                            content.style.maxHeight = content.scrollHeight + 'px';
                        }
                    }
                });
            }
        });
    }

    // Simple toggle for FAQ questions on individual pages
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                
                if (answer.style.display === 'none' || answer.style.display === '') {
                    answer.style.display = 'block';
                } else {
                    answer.style.display = 'none';
                }
            });
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
                monthlyLabel.classList.remove('toggle-active');
                annualLabel.classList.add('toggle-active');
            } else {
                // Monthly pricing
                monthlyPrices.forEach(price => price.style.display = 'block');
                annualPrices.forEach(price => price.style.display = 'none');
                monthlyLabel.classList.add('toggle-active');
                annualLabel.classList.remove('toggle-active');
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
                filterContent(tagFilter, searchInput.value);
            });
        });
        
        // Search functionality
        if (searchBtn) {
            searchBtn.addEventListener('click', function() {
                const activeTag = document.querySelector('.tag.active').getAttribute('data-tag');
                filterContent(activeTag, searchInput.value);
            });
        }
        
        // Enter key in search input
        if (searchInput) {
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    const activeTag = document.querySelector('.tag.active').getAttribute('data-tag');
                    filterContent(activeTag, searchInput.value);
                }
            });
        }
        
        // Clear filters
        if (clearFilters) {
            clearFilters.addEventListener('click', function() {
                searchInput.value = '';
                const allTag = document.querySelector('.tag[data-tag="all"]');
                tags.forEach(t => t.classList.remove('active'));
                allTag.classList.add('active');
                filterContent('all', '');
            });
        }
        
        // Filter blog posts based on tag and search query
        function filterContent(tagFilter, searchQuery) {
            let visibleCount = 0;
            
            blogCards.forEach(card => {
                const cardTags = card.getAttribute('data-tags').split(',');
                const cardTitle = card.querySelector('.blog-title').textContent.toLowerCase();
                const cardExcerpt = card.querySelector('.blog-excerpt').textContent.toLowerCase();
                
                // Check if card matches tag filter
                const matchesTag = tagFilter === 'all' || cardTags.includes(tagFilter);
                
                // Check if card matches search query
                const searchLower = searchQuery.toLowerCase();
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
});

// Current year for copyright
document.write(new Date().getFullYear());
