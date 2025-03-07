// Main JavaScript file with all functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.textContent = '☰';
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.textContent = '☰';
                document.body.style.overflow = '';
            });
        });
    }
    
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const content = dropdown.querySelector('.dropdown-content');
        
        if (trigger && content) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                content.classList.toggle('active');
                
                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.querySelector('.dropdown-content')?.classList.remove('active');
                    }
                });
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropdown-content')?.classList.remove('active');
            });
        }
    });
    
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

    // FAQ accordion functionality
    const allFaqItems = document.querySelectorAll('.faq-item');
    
    if (allFaqItems.length > 0) {
        // Add click event to all question headers
        allFaqItems.forEach(item => {
            const header = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            
            if (header && answer) {
                // Initially hide all answers except the first one
                if (item !== allFaqItems[0]) {
                    answer.style.display = 'none';
                } else {
                    item.classList.add('active');
                }
                
                header.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other items
                    allFaqItems.forEach(otherItem => {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            if (otherAnswer) otherAnswer.style.display = 'none';
                        }
                    });
                    
                    // Toggle current item
                    if (isActive) {
                        item.classList.remove('active');
                        answer.style.display = 'none';
                    } else {
                        item.classList.add('active');
                        answer.style.display = 'block';
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
        const monthlyRows = document.querySelectorAll('.monthly-row');
        const annualRows = document.querySelectorAll('.annual-row');
        
        pricingToggle.addEventListener('change', function() {
            if (this.checked) {
                // Annual pricing
                monthlyPrices.forEach(price => price.style.display = 'none');
                annualPrices.forEach(price => price.style.display = 'block');
                
                // Annual table rows
                monthlyRows.forEach(row => row.style.display = 'none');
                annualRows.forEach(row => row.style.display = 'table-row');
                
                if (monthlyLabel) monthlyLabel.classList.remove('toggle-active');
                if (annualLabel) annualLabel.classList.add('toggle-active');
            } else {
                // Monthly pricing
                monthlyPrices.forEach(price => price.style.display = 'block');
                annualPrices.forEach(price => price.style.display = 'none');
                
                // Monthly table rows
                monthlyRows.forEach(row => row.style.display = 'table-row');
                annualRows.forEach(row => row.style.display = 'none');
                
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
                const tagFilter = activeTag ? activeTag.getAttribute('data-tag') : 'all';
                filterContent(tagFilter, searchInput.value);
            });
            
            // Enter key in search input
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    const activeTag = document.querySelector('.tag.active');
                    const tagFilter = activeTag ? activeTag.getAttribute('data-tag') : 'all';
                    filterContent(tagFilter, searchInput.value);
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
    
    // Add animation for elements when they enter viewport
    const animateOnScroll = () => {
        const animatedElements = document.querySelectorAll('.service-card, .action-card, .process-step, .testimonial, .pricing-plan');
        
        animatedElements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            
            if (elementPosition < viewportHeight * 0.9) {
                el.classList.add('animated');
            }
        });
    };
    
    // Run on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.classList.add('back-to-top');
    backToTopBtn.innerHTML = '↑';
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add active class to current navigation item based on URL
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname;
        
        // Account for trailing slashes and index.html
        const normalizedCurrentPath = currentLocation.replace(/\/(index\.html)?$/, '/');
        const normalizedLinkPath = linkPath.replace(/\/(index\.html)?$/, '/');
        
        if (normalizedCurrentPath === normalizedLinkPath) {
            link.classList.add('active');
        }
    });
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
