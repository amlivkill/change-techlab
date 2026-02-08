import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const pricingData = [
        { name: "Compliance Automation", price: "₹75,000 + ₹10,000/mo" },
        { name: "Proposal / DPR Engine", price: "₹40,000" },
        { name: "Website Generator", price: "₹30,000" },
        { name: "SOP Builder", price: "₹35,000" },
        { name: "MIS System", price: "₹50,000 + ₹8,000/mo" },
        { name: "Finance Automation", price: "₹45,000 + ₹7,000/mo" },
        { name: "Training Factory", price: "₹25,000" },
        { name: "Carbon & Impact Reporting", price: "₹60,000 + ₹12,000/mo" },
        { name: "NGO / CSR CRM", price: "₹55,000 + ₹9,000/mo" },
        { name: "Custom AI Agents", price: "₹25,000/mo onwards" },
    ];

    return (
        <div className="container" style={{ padding: '6rem 20px' }}>
            <header className="text-center mb-4">
                <h1 className="h2">Transparent Pricing</h1>
                <p className="text-lead" style={{ margin: '0 auto' }}>No equity. No hidden fees. Pay for the system.</p>
            </header>

            <div style={{ maxWidth: '800px', margin: '0 auto', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '1.5rem', borderBottom: '2px solid var(--border-color)', color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.85rem' }}>System</th>
                            <th style={{ padding: '1.5rem', borderBottom: '2px solid var(--border-color)', color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.85rem', textAlign: 'right' }}>Cost (INR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pricingData.map((item, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1.5rem', fontWeight: '500' }}>{item.name}</td>
                                <td style={{ padding: '1.5rem', textAlign: 'right', fontFamily: 'monospace', fontSize: '1.1rem', color: 'var(--accent-color)' }}>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="text-center" style={{ marginTop: '4rem' }}>
                <p className="text-small mb-2">* Annual maintenance contracts (AMC) available upon request.</p>
                <Link to="/contact" className="btn btn-primary">Book a System</Link>
            </div>
        </div>
    );
};

export default Pricing;
