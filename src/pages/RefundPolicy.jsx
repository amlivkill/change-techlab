import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="container" style={{ padding: '8rem 20px 4rem', maxWidth: '800px' }}>
            <h1 className="h2 mb-2">REFUND POLICY</h1>
            <p className="text-small mb-4">Last updated: 2026</p>
            <p className="text-accent mb-4">(STRICT – READ CAREFULLY)</p>

            <div className="mb-4">
                <p>CHANGE TechLab follows a limited and conditional refund policy.</p>
            </div>

            <section className="mb-4">
                <h2 className="h3 mb-1">1. No Refund Services</h2>
                <p>No refunds are provided for:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Custom AI systems</li>
                    <li>Compliance automation</li>
                    <li>CRM, MIS, or finance automation</li>
                    <li>Retainer or subscription services</li>
                    <li>Services where work has started</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">2. Eligible Refunds</h2>
                <p>Refunds may be considered only if:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Payment was made for a clearly defined instant-purchase service</li>
                    <li>Work has not started</li>
                    <li>Written request is received within 48 hours of payment</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">3. Refund Process</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Approved refunds will be processed within 7–10 business days</li>
                    <li>Payment gateway charges are non-refundable</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">4. Dispute Resolution</h2>
                <p>All disputes must be raised in writing to <a href="mailto:hello@changetechlab.in" className="text-accent">hello@changetechlab.in</a>.</p>
                <p style={{ marginTop: '10px' }}>Chargebacks without prior communication may result in service blacklisting.</p>
            </section>
        </div>
    );
};

export default RefundPolicy;
