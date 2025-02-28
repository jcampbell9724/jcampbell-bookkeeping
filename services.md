---
layout: default
title: Our Services
permalink: /services/
---

<div class="services-container">
    <div class="service-block">
        <div class="service-icon">🧮</div>
        <div class="service-content">
            <h2>Full Cycle Accounting</h2>
            <p>Our comprehensive bookkeeping services cover every aspect of your financial management, from day-to-day transactions to strategic financial planning.</p>
            
            <div class="service-features">
                <ul>
                    <li>Accounts receivable & payable management</li>
                    <li>Bank and credit card reconciliations</li>
                    <li>General ledger maintenance</li>
                    <li>Monthly financial statement preparation</li>
                    <li>Cash flow management</li>
                </ul>
            </div>
            
            <a href="{{ site.baseurl }}/#contact" class="btn btn-outline">Learn More</a>
        </div>
    </div>
    
    <div class="service-block">
        <div class="service-icon">📈</div>
        <div class="service-content">
            <h2>Data Visualization</h2>
            <p>Transform complex financial data into clear, actionable insights with our specialized data visualization services.</p>
            
            <div class="service-features">
                <ul>
                    <li>Custom financial dashboards</li>
                    <li>Performance trend analysis</li>
                    <li>Interactive reports for better decision-making</li>
                    <li>Revenue and expense breakdowns</li>
                    <li>Comparative financial analysis</li>
                </ul>
            </div>
            
            <a href="{{ site.baseurl }}/#contact" class="btn btn-outline">Learn More</a>
        </div>
    </div>
    
    <div class="service-block">
        <div class="service-icon">📝</div>
        <div class="service-content">
            <h2>Tax Preparation</h2>
            <p>Stay compliant and minimize your tax burden with our thorough tax preparation services.</p>
            
            <div class="service-features">
                <ul>
                    <li>Business tax return preparation</li>
                    <li>Quarterly tax planning</li>
                    <li>Deduction optimization</li>
                    <li>Year-round tax strategy</li>
                    <li>Documentation organization for filing</li>
                </ul>
            </div>
            
            <a href="{{ site.baseurl }}/#contact" class="btn btn-outline">Learn More</a>
        </div>
    </div>
</div>

<style>
    .services-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    
    .service-block {
        display: flex;
        background-color: #f8fafc;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    
    .service-icon {
        font-size: 2.5rem;
        margin-right: 25px;
        min-width: 50px;
    }
    
    .service-content {
        flex: 1;
    }
    
    .service-content h2 {
        color: #1a365d;
        margin-bottom: 15px;
    }
    
    .service-features {
        margin: 20px 0;
    }
    
    .service-features ul {
        margin-left: 20px;
    }
    
    .service-features li {
        margin-bottom: 8px;
    }
    
    @media (max-width: 768px) {
        .service-block {
            flex-direction: column;
        }
        
        .service-icon {
            margin-bottom: 15px;
        }
    }
</style>
