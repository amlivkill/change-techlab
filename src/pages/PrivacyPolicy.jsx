import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container" style={{ padding: '8rem 20px 4rem', maxWidth: '800px' }}>
            <h1 className="h2 mb-2">PRIVACY POLICY</h1>
            <p className="text-small mb-4">Last updated: 2026</p>

            <div className="mb-4">
                <p>CHANGE TechLab (“we”, “our”, “us”) operates as an AI systems and technology services provider. This Privacy Policy explains how we collect, use, and protect your information.</p>
            </div>

            <section className="mb-4">
                <h2 className="h3 mb-1">1. Information We Collect</h2>
                <p>We may collect:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Name, email, phone number</li>
                    <li>Organization details</li>
                    <li>Billing and payment information</li>
                    <li>Communication data (emails, forms, calls)</li>
                    <li>Usage data related to our systems and services</li>
                </ul>
                <p style={{ marginTop: '10px' }}>We do not intentionally collect sensitive personal data unless required for service delivery.</p>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">2. How We Use Information</h2>
                <p>Your information is used to:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Deliver contracted services</li>
                    <li>Process payments and invoices</li>
                    <li>Communicate service updates</li>
                    <li>Improve system performance</li>
                    <li>Meet legal and compliance obligations</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">3. Data Sharing</h2>
                <p>We do not sell or rent your data.<br />Data may be shared only with:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Payment gateway providers (e.g., Razorpay)</li>
                    <li>Legal, accounting, or compliance authorities (when required by law)</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">4. Data Security</h2>
                <p>We use reasonable technical and organizational measures to protect data. However, no system is 100% secure, and we do not guarantee absolute security.</p>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">5. Data Retention</h2>
                <p>Data is retained only as long as necessary for:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Service delivery</li>
                    <li>Legal, tax, or regulatory requirements</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">6. Your Rights</h2>
                <p>You may request access, correction, or deletion of your data by contacting us at <a href="mailto:hello@changetechlab.in" className="text-accent">hello@changetechlab.in</a>.</p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
