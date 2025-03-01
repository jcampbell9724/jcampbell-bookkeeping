---
layout: default
title: Pricing
permalink: /pricing/
description: Transparent and flexible pricing options for professional bookkeeping services tailored to small businesses.
---

<style>
    /* Override minima's default wrapper constraints */
    .wrapper {
        max-width: 100% !important;
    }
    
    .page-content {
        padding: 0 !important;
    }
    
    /* Main container for this page */
    .pricing-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        padding-top: 100px;
    }
    
    /* Pricing page specific styles */
    .pricing-hero {
        background: linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%);
        color: white;
        padding: 50px 30px;
        text-align: center;
        margin-bottom: 60px;
        border-radius: 8px;
    }
    
    .pricing-hero h1 {
        margin-bottom: 20px;
        color: white;
    }
    
    .pricing-hero p {
        max-width: 800px;
        margin: 0 auto;
        color: white;
    }
    
    .pricing-section {
        margin-bottom: 80px;
    }
    
    .pricing-section h2 {
        color: #1a365d;
        margin-bottom: 25px;
        text-align: center;
        position: relative;
    }
    
    .pricing-section h2:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background-color: #ed8936;
    }
    
    .pricing-section p {
        color: #718096;
        margin-bottom: 20px;
        line-height: 1.7;
        text-align: center;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .pricing-toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 0;
    }
    
    .toggle-label {
        font-weight: 600;
        color: #718096;
    }
    
    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        margin: 0 15px;
    }
    
    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 34px;
    }
    
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }
    
    input:checked + .slider {
        background-color: #1a365d;
    }
    
    input:checked + .slider:before {
        transform: translateX(26px);
    }
    
    .monthly-label, .annual-label {
        transition: all 0.3s ease;
    }
    
    .toggle-active {
        color: #1a365d;
    }
    
    .pricing-plans {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
        margin-top: 40px;
    }
    
    .pricing-plan {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        padding: 40px 30px;
        flex: 1;
        min-width: 300px;
        max-width: 380px;
        position: relative;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
    }
    
    .pricing-plan:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .popular-tag {
        position: absolute;
        top: -15px;
        right: 20px;
        background-color: #ed8936;
        color: white;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
    }
    
    .plan-name {
        color: #1a365d;
        font-size: 1.5rem;
        margin-bottom: 10px;
        text-align: center;
        font-weight: 700;
    }
    
    .plan-description {
        color: #718096;
        text-align: center;
        margin-bottom: 25px;
        font-size: 0.95rem;
    }
    
    .plan-price {
        text-align: center;
        margin-bottom: 25px;
    }
    
    .price {
        font-size: 2.5rem;
        color: #1a365d;
        font-weight: 700;
    }
    
    .price-period {
        color: #718096;
        font-size: 0.9rem;
    }
    
    .plan-features {
        margin-bottom: 30px;
        flex-grow: 1;
    }
    
    .feature-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 15px;
    }
    
    .feature-icon {
        color: #1a365d;
        margin-right: 10px;
        flex-shrink: 0;
    }
    
    .feature-text {
        color: #4a5568;
        font-size: 0.95rem;
    }
    
    .plan-cta {
        text-align: center;
    }
    
    .btn {
        display: inline-block;
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        text-align: center;
    }
    
    .btn-primary {
        background-color: #1a365d;
        color: white;
    }
    
    .btn-primary:hover {
        background-color: #2b6cb0;
        transform: translateY(-3px);
        color: white;
        text-decoration: none;
    }
    
    .btn-outline {
        background-color: transparent;
        color: #1a365d;
        border: 2px solid #1a365d;
    }
    
    .btn-outline:hover {
        background-color: #1a365d;
        color: white;
        transform: translateY(-3px);
        text-decoration: none;
    }
    
    .btn-accent {
        background-color: #ed8936;
        color: white;
    }
    
    .btn-accent:hover {
        background-color: #dd6b20;
        transform: translateY(-3px);
        color: white;
        text-decoration: none;
    }
    
    .addons-section {
        margin-top: 80px;
    }
    
    .addons-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        margin-top: 40px;
    }
    
    .addon-card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.1);
        padding: 25px;
        display: flex;
        flex-direction: column;
    }
    
    .addon-name {
        color: #1a365d;
        font-size: 1.2rem;
        margin-bottom: 10px;
        font-weight: 600;
    }
    
    .addon-price {
        color: #1a365d;
        font-weight: 600;
        margin-bottom: 15px;
    }
    
    .addon-description {
        color: #718096;
        font-size: 0.95rem;
        flex-grow: 1;
    }
    
    .faq-section {
        margin-top: 80px;
    }
    
    .faq-container {
        max-width: 800px;
        margin: 40px auto 0;
    }
    
    .faq-item {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        margin-bottom: 20px;
        overflow: hidden;
    }
    
    .faq-question {
        padding: 20px;
        cursor: pointer;
        font-weight: 600;
        color: #1a365d;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .faq-answer {
        padding: 0 20px 20px;
        color: #718096;
        display: none;
    }
    
    .cta-section {
        background: linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%);
        color: white;
        padding: 50px 30px;
        text-align: center;
        margin: 60px 0 40px;
        border-radius: 8px;
    }
    
    .cta-section h2 {
        margin-bottom: 20px;
        color: white;
    }
    
    .cta-section p {
        margin-bottom: 30px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        color: white;
    }
    
    @media (max-width: 768px) {
        .pricing-plans {
            flex-direction: column;
            align-items: center;
        }
        
        .pricing-plan {
            width: 100%;
            max-width: 100%;
        }
    }
</style>

<div class="pricing-container">
    <div class="pricing-hero">
        <h1>Simple, Transparent Pricing</h1>
        <p>Flexible bookkeeping packages designed to fit your business size and needs. No hidden fees, no surprises—just clear pricing for professional financial management.</p>
    </div>

    <div class="pricing-section">
        <h2>Choose Your Plan</h2>
        <p>Select the package that best fits your business requirements. Not sure which is right for you? Schedule a free consultation and we'll help you decide.</p>
        
        <div class="pricing-toggle">
            <span class="toggle-label monthly-label toggle-active">Monthly</span>
            <label class="toggle-switch">
                <input type="checkbox" id="pricing-toggle">
                <span class="slider"></span>
            </label>
            <span class="toggle-label annual-label">Annual <span style="color: #ed8936; font-size: 0.9rem;">(Save 10%)</span></span>
        </div>
        
        <div class="pricing-plans">
            <div class="pricing-plan">
                <div class="plan-name">Startup</div>
                <div class="plan-description">Essential bookkeeping for new and small businesses</div>
                <div class="plan-price">
                    <div class="price monthly-price">$349</div>
                    <div class="price annual-price" style="display: none;">$314</div>
                    <div class="price-period">per month</div>
                </div>
                <div class="plan-features">
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Monthly bookkeeping</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Bank & credit card reconciliation</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Monthly financial statements</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Basic financial dashboard</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Up to 100 monthly transactions</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Email support</div>
                    </div>
                </div>
                <div class="plan-cta">
                    <a href="{{ site.baseurl }}/#contact" class="btn btn-outline">Get Started</a>
                </div>
            </div>
            
            <div class="pricing-plan">
                <div class="popular-tag">Most Popular</div>
                <div class="plan-name">Growth</div>
                <div class="plan-description">Comprehensive bookkeeping for growing businesses</div>
                <div class="plan-price">
                    <div class="price monthly-price">$649</div>
                    <div class="price annual-price" style="display: none;">$584</div>
                    <div class="price-period">per month</div>
                </div>
                <div class="plan-features">
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Everything in Startup, plus:</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Accounts payable management</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Accounts receivable management</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Cash flow forecasting</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Enhanced PowerBI dashboard</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Up to 250 monthly transactions</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Email & phone support</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Monthly review calls</div>
                    </div>
                </div>
                <div class="plan-cta">
                    <a href="{{ site.baseurl }}/#contact" class="btn btn-accent">Get Started</a>
                </div>
            </div>
            
            <div class="pricing-plan">
                <div class="plan-name">Premium</div>
                <div class="plan-description">Advanced financial management for established businesses</div>
                <div class="plan-price">
                    <div class="price monthly-price">$949</div>
                    <div class="price annual-price" style="display: none;">$854</div>
                    <div class="price-period">per month</div>
                </div>
                <div class="plan-features">
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Everything in Growth, plus:</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Dedicated bookkeeper</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Monthly profitability analysis</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Budget creation & monitoring</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Custom PowerBI dashboards</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Financial strategy consulting</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Up to 500 monthly transactions</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Priority support</div>
                    </div>
                </div>
                <div class="plan-cta">
                    <a href="{{ site.baseurl }}/#contact" class="btn btn-primary">Get Started</a>
                </div>
            </div>
        </div>
    </div>

    <div class="pricing-section addons-section">
        <h2>Additional Services</h2>
        <p>Customize your plan with these add-on services to meet your specific business needs.</p>
        
        <div class="addons-container">
            <div class="addon-card">
                <div class="addon-name">Payroll Processing</div>
                <div class="addon-price">Starting at $149/month</div>
                <div class="addon-description">Complete payroll management including direct deposits, tax withholding, and compliance reporting.</div>
            </div>
            
            <div class="addon-card">
                <div class="addon-name">Tax Preparation</div>
                <div class="addon-price">Starting at $499/year</div>
                <div class="addon-description">Annual business tax return preparation and filing with strategic tax planning.</div>
            </div>
            
            <div class="addon-card">
                <div class="addon-name">Catch-Up Bookkeeping</div>
                <div class="addon-price">Custom Quote</div>
                <div class="addon-description">Get your books up-to-date with our specialized catch-up bookkeeping services.</div>
            </div>
            
            <div class="addon-card">
                <div class="addon-name">Custom PowerBI Dashboard</div>
                <div class="addon-price">Starting at $349 (one-time)</div>
                <div class="addon-description">Tailored financial dashboards designed specifically for your business metrics and KPIs.</div>
            </div>
            
            <div class="addon-card">
                <div class="addon-name">CFO Advisory Services</div>
                <div class="addon-price">$199/hour</div>
                <div class="addon-description">Strategic financial consulting and planning from experienced financial advisors.</div>
            </div>
            
            <div class="addon-card">
                <div class="addon-name">Financial Process Setup</div>
                <div class="addon-price">Starting at $599 (one-time)</div>
                <div class="addon-description">Implementation of efficient financial workflows and accounting systems.</div>
            </div>
        </div>
    </div>

    <div class="pricing-section faq-section">
        <h2>Frequently Asked Questions</h2>
        
        <div class="faq-container">
            <div class="faq-item">
                <div class="faq-question">
                    Are there any setup fees?
                </div>
                <div class="faq-answer">
                    <p>No, there are no setup fees for our standard bookkeeping packages. We believe in transparent pricing with no hidden costs. The only time you might encounter a one-time fee is for specialized services like custom dashboard development or if extensive system setup is required for complex businesses.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <div class="faq-question">
                    What if I have more transactions than my plan allows?
                </div>
                <div class="faq-answer">
                    <p>If your business consistently exceeds the transaction limit in your current plan, we'll reach out to discuss upgrading to a more suitable package. For occasional months with higher volume, we charge a small per-transaction fee for the excess transactions. We'll always discuss this with you before applying any additional charges.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <div class="faq-question">
                    Can I change plans as my business grows?
                </div>
                <div class="faq-answer">
                    <p>Absolutely! We design our service model to be flexible and scalable. You can upgrade your plan at any time as your business needs change. If you're on an annual plan and need to upgrade mid-year, we'll simply prorate the difference. Downgrades can be made at the end of your current billing cycle.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <div class="faq-question">
                    Do you offer a discount for non-profits?
                </div>
                <div class="faq-answer">
                    <p>Yes, we offer a 15% discount on all our service packages for registered non-profit organizations. We're committed to supporting the important work non-profits do and understand they often operate with limited resources. Please mention your non-profit status during your consultation.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <div class="faq-question">
                    What software do you use for bookkeeping?
                </div>
                <div class="faq-answer">
                    <p>We're proficient in most major accounting platforms including QuickBooks, Xero, and FreshBooks. We typically work with whatever system you're already using, or we can recommend and implement the best solution for your specific business needs. For data visualization and reporting, we use PowerBI to create custom dashboards that give you actionable insights.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <div class="faq-question">
                    What if my business doesn't fit neatly into one of your packages?
                </div>
                <div class="faq-answer">
                    <p>We understand that every business is unique. If our standard packages don't align perfectly with your needs, we're happy to create a custom solution tailored specifically to your business. Contact us for a free consultation, and we'll work together to design a service package that addresses your exact requirements and budget.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="cta-section">
        <h2>Not Sure Which Plan Is Right for You?</h2>
        <p>Let's discuss your specific business needs and find the perfect solution. Our team is ready to provide personalized guidance and answer any questions you may have about our services.</p>
        <a href="{{ site.baseurl }}/#contact" class="btn btn-accent">Schedule Your Free Consultation</a>
    </div>
</div>

<script>
    // Toggle between monthly and annual pricing
    document.addEventListener('DOMContentLoaded', function() {
        const pricingToggle = document.getElementById('pricing-toggle');
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
        
        // Simple toggle for FAQ items
        const faqQuestions = document.querySelectorAll('.faq-question');
        
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
    });
</script>
