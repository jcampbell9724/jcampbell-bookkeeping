---
layout: default
title: About
permalink: /about/
description: Learn about Jcampbell Bookkeeping, our story, our approach, and why small businesses trust us with their financial management.
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
    .about-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        padding-top: 100px;
    }
    
    /* About page specific styles */
    .about-hero {
        background: linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%);
        color: white;
        padding: 50px 30px;
        text-align: center;
        margin-bottom: 60px;
        border-radius: 8px;
    }
    
    .about-hero h1 {
        margin-bottom: 20px;
        color: white;
    }
    
    .about-hero p {
        max-width: 800px;
        margin: 0 auto;
        color: white;
    }
    
    .about-section {
        margin-bottom: 80px;
    }
    
    .about-section h2 {
        color: #1a365d;
        margin-bottom: 25px;
        text-align: center;
        position: relative;
    }
    
    .about-section h2:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background-color: #ed8936;
    }
    
    .about-section p {
        color: #718096;
        margin-bottom: 20px;
        line-height: 1.7;
    }
    
    .two-column {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        align-items: center;
        margin-top: 40px;
    }
    
    .column {
        flex: 1;
        min-width: 300px;
    }
    
    .about-image {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        height: 100%;
        background: linear-gradient(135deg, #2b6cb0 0%, #1a365d 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 400px;
    }
    
    .about-image-placeholder {
        text-align: center;
        padding: 20px;
        color: white;
    }
    
    .about-image-placeholder h3 {
        font-size: 28px;
        margin-bottom: 15px;
        color: white;
    }
    
    .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        margin-top: 40px;
    }
    
    .value-card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        padding: 30px;
        text-align: center;
        transition: all 0.3s ease;
    }
    
    .value-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
    
    .value-icon {
        font-size: 40px;
        margin-bottom: 20px;
        color: #1a365d;
    }
    
    .value-card h3 {
        color: #1a365d;
        margin-bottom: 15px;
    }
    
    .credentials-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 40px;
        justify-content: center;
    }
    
    .credential {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        padding: 20px;
        text-align: center;
        min-width: 220px;
        flex: 1;
    }
    
    .credential-icon {
        font-size: 30px;
        margin-bottom: 15px;
        color: #1a365d;
    }
    
    .credential h3 {
        color: #1a365d;
        font-size: 1.2rem;
        margin-bottom: 10px;
    }
    
    .credential p {
        color: #718096;
        font-size: 0.9rem;
        margin-bottom: 0;
    }
    
    .why-choose-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        margin-top: 40px;
    }
    
    .reason-card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        padding: 25px;
        transition: all 0.3s ease;
    }
    
    .reason-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.1);
    }
    
    .reason-icon {
        font-size: 30px;
        margin-bottom: 15px;
        color: #1a365d;
    }
    
    .reason-card h3 {
        color: #1a365d;
        margin-bottom: 15px;
        font-size: 1.3rem;
    }
    
    .testimonials-section {
        background-color: #f7fafc;
        padding: 60px 30px;
        margin: 60px 0;
        border-radius: 8px;
    }
    
    .testimonials-section h2 {
        text-align: center;
        margin-bottom: 40px;
        color: #1a365d;
    }
    
    .testimonials-section h2:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background-color: #ed8936;
    }
    
    .testimonial {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        padding: 30px;
        margin-bottom: 30px;
        position: relative;
    }
    
    .testimonial-quote {
        font-size: 1.1rem;
        font-style: italic;
        margin-bottom: 20px;
        color: #4a5568;
        line-height: 1.6;
    }
    
    .testimonial-author {
        font-weight: 600;
        color: #1a365d;
    }
    
    .testimonial-company {
        color: #718096;
        font-size: 0.9rem;
    }
    
    .quote-icon {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 3rem;
        color: #e2e8f0;
        line-height: 1;
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
    
    .btn {
        display: inline-block;
        background-color: #ed8936;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    
    .btn:hover {
        background-color: #dd6b20;
        transform: translateY(-3px);
        color: white;
        text-decoration: none;
    }
    
    @media (max-width: 768px) {
        .two-column {
            flex-direction: column;
        }
        
        .about-image {
            min-height: 300px;
        }
    }
</style>

<div class="about-container">
    <div class="about-hero">
        <h1>About Jcampbell Bookkeeping</h1>
        <p>We're more than just bookkeepers. We're dedicated financial partners committed to helping small businesses thrive through expert financial management, strategic insights, and personalized service.</p>
    </div>

    <div class="about-section">
        <h2>Our Story</h2>
        <div class="two-column">
            <div class="column">
                <p>Jcampbell Bookkeeping was founded with a clear mission: to provide small businesses with the high-quality financial services typically available only to larger companies.</p>
                
                <p>After years of working in corporate finance, our founder recognized that many small business owners were struggling with financial management, often juggling bookkeeping alongside their core business operations. This not only consumed valuable time but frequently led to costly mistakes and missed opportunities.</p>
                
                <p>We built Jcampbell Bookkeeping to bridge this gap, offering comprehensive financial services specifically tailored to the unique needs of small businesses. Our approach combines professional expertise with personalized service, providing our clients with both the accurate financial data and strategic insights they need to make informed business decisions.</p>
                
                <p>Today, we serve clients across various industries, helping them achieve financial clarity, maintain compliance, and position their businesses for sustainable growth.</p>
            </div>
            <div class="column">
                <div class="about-image">
                    <div class="about-image-placeholder">
                        <h3>Jcampbell Bookkeeping</h3>
                        <p>Financial Clarity for Business Growth</p>
                        <div style="font-size: 60px; margin: 20px 0;">📊 📈 💼</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="about-section">
        <h2>Our Values</h2>
        <p>At Jcampbell Bookkeeping, our work is guided by a set of core values that inform everything we do—from how we interact with clients to how we approach financial management.</p>
        
        <div class="values-grid">
            <div class="value-card">
                <div class="value-icon">🔍</div>
                <h3>Accuracy</h3>
                <p>We maintain the highest standards of precision in all our work, knowing that accurate financial data is the foundation of sound business decisions.</p>
            </div>
            
            <div class="value-card">
                <div class="value-icon">🤝</div>
                <h3>Integrity</h3>
                <p>We operate with unwavering honesty and ethical standards, building relationships based on trust and transparency.</p>
            </div>
            
            <div class="value-card">
                <div class="value-icon">👤</div>
                <h3>Client Focus</h3>
                <p>We take the time to understand each client's unique needs and business context, delivering tailored solutions rather than one-size-fits-all services.</p>
            </div>
            
            <div class="value-card">
                <div class="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>We continuously seek better ways to serve our clients, leveraging modern technology and best practices to improve efficiency and insights.</p>
            </div>
        </div>
    </div>

    <div class="about-section">
        <h2>Credentials & Expertise</h2>
        <p>Our team brings professional qualifications and extensive experience to provide you with expert financial services you can trust.</p>
        
        <div class="credentials-list">
            <div class="credential">
                <div class="credential-icon">🎓</div>
                <h3>Professional Certifications</h3>
                <p>Our team includes certified bookkeepers and accounting professionals with relevant industry credentials.</p>
            </div>
            
            <div class="credential">
                <div class="credential-icon">⏱️</div>
                <h3>Years of Experience</h3>
                <p>With over a decade of experience in financial management, we've developed deep expertise across multiple industries.</p>
            </div>
            
            <div class="credential">
                <div class="credential-icon">💻</div>
                <h3>Software Proficiency</h3>
                <p>We're experts in leading accounting software platforms including QuickBooks, Xero, FreshBooks, and specialized tools like PowerBI.</p>
            </div>
            
            <div class="credential">
                <div class="credential-icon">📚</div>
                <h3>Continuing Education</h3>
                <p>We stay current with changing regulations and best practices through ongoing professional development.</p>
            </div>
        </div>
    </div>

    <div class="about-section">
        <h2>Why Choose Us</h2>
        <p>Selecting the right financial partner is a critical decision for your business. Here's why clients choose to work with Jcampbell Bookkeeping:</p>
        
        <div class="why-choose-grid">
            <div class="reason-card">
                <div class="reason-icon">🎯</div>
                <h3>Specialized in Small Business</h3>
                <p>Unlike general accounting firms, we focus specifically on the unique needs and challenges of small businesses, providing services tailored to your scale and goals.</p>
            </div>
            
            <div class="reason-card">
                <div class="reason-icon">📊</div>
                <h3>Data Visualization Expertise</h3>
                <p>We transform complex financial data into clear, actionable insights through custom PowerBI dashboards and visual reporting that makes decision-making easier.</p>
            </div>
            
            <div class="reason-card">
                <div class="reason-icon">💰</div>
                <h3>Cost-Effective Solutions</h3>
                <p>Our services provide professional financial management at a fraction of the cost of hiring in-house staff, with flexible packages to fit your business needs.</p>
            </div>
            
            <div class="reason-card">
                <div class="reason-icon">⚡</div>
                <h3>Responsive Service</h3>
                <p>We pride ourselves on quick response times and proactive communication, ensuring you never feel left in the dark about your financial matters.</p>
            </div>
            
            <div class="reason-card">
                <div class="reason-icon">🔄</div>
                <h3>Scalable Support</h3>
                <p>Our services grow with your business, adapting to your changing needs as you expand without requiring you to switch providers.</p>
            </div>
            
            <div class="reason-card">
                <div class="reason-icon">🔒</div>
                <h3>Security & Confidentiality</h3>
                <p>We implement rigorous security measures to protect your sensitive financial data, maintaining the highest standards of confidentiality.</p>
            </div>
        </div>
    </div>

    <div class="testimonials-section">
        <h2>What Our Clients Say</h2>
        
        <div class="testimonial">
            <div class="quote-icon">"</div>
            <p class="testimonial-quote">I've worked with several bookkeepers over the years, but Jcampbell Bookkeeping stands out for their attention to detail and ability to explain complex financial concepts in terms I can understand. They've become an invaluable part of my business operations.</p>
            <p class="testimonial-author">Robert Chen</p>
            <p class="testimonial-company">Owner, Eastside Plumbing & Heating</p>
        </div>
        
        <div class="testimonial">
            <div class="quote-icon">"</div>
            <p class="testimonial-quote">As a growing retail business, we needed financial systems that could scale with us. Jcampbell Bookkeeping not only organized our books but implemented processes that have made our expansion to multiple locations much smoother than we anticipated.</p>
            <p class="testimonial-author">Amanda Rivera</p>
            <p class="testimonial-company">Founder, Green Leaf Boutique</p>
        </div>
        
        <div class="testimonial">
            <div class="quote-icon">"</div>
            <p class="testimonial-quote">The PowerBI dashboards Jcampbell created for us completely transformed how we view our business performance. For the first time, we have real-time insights into our finances that help us make better decisions every day.</p>
            <p class="testimonial-author">David Washington</p>
            <p class="testimonial-company">CEO, Nexus Technology Solutions</p>
        </div>
    </div>

    <div class="cta-section">
        <h2>Ready to Work Together?</h2>
        <p>Let's start a conversation about how we can help your business achieve financial clarity and position itself for sustainable growth.</p>
        <a href="{{ site.baseurl }}/#contact" class="btn">Schedule Your Free Consultation</a>
    </div>
</div>
