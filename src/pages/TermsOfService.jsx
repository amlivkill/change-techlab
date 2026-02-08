import React from 'react';

const TermsOfService = () => {
    return (
        <div className="container" style={{ padding: '8rem 20px 4rem', maxWidth: '800px' }}>
            <h1 className="h2 mb-2">TERMS OF SERVICE</h1>
            <p className="text-small mb-4">Last updated: 2026</p>

            <div className="mb-4">
                <p>By accessing or using CHANGE TechLab services, you agree to these Terms.</p>
            </div>

            <section className="mb-4">
                <h2 className="h3 mb-1">1. Nature of Services</h2>
                <p>CHANGE TechLab provides fixed-scope, system-based AI and automation services.</p>
                <p>We are not a consultancy, legal firm, or accounting firm.</p>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">2. Scope & Delivery</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Each service has a clearly defined scope</li>
                    <li>Anything outside scope requires a separate agreement</li>
                    <li>No verbal commitments are binding</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">3. Payments</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Prices are listed in INR (₹)</li>
                    <li>Payments must be made as per agreed milestones or upfront</li>
                    <li>Taxes (GST, if applicable) are extra</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">4. No Guarantees</h2>
                <p>We do not guarantee:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Funding approvals</li>
                    <li>Government sanctions</li>
                    <li>Business outcomes</li>
                    <li>Revenue, profit, or compliance approvals</li>
                </ul>
                <p style={{ marginTop: '10px' }}>Our responsibility is limited to system delivery, not external decisions.</p>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">5. Intellectual Property</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>All underlying frameworks, prompts, code logic, and systems remain the intellectual property of CHANGE TechLab</li>
                    <li>Client receives usage rights only, unless explicitly stated otherwise</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">6. Limitation of Liability</h2>
                <p>CHANGE TechLab shall not be liable for:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Indirect or consequential losses</li>
                    <li>Regulatory actions</li>
                    <li>Third-party decisions or delays</li>
                </ul>
                <p style={{ marginTop: '10px' }}>Maximum liability is limited to the amount paid for the specific service.</p>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">7. Termination</h2>
                <p>We reserve the right to terminate services if:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Client violates terms</li>
                    <li>Misrepresentation is found</li>
                    <li>Payment obligations are not met</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2 className="h3 mb-1">8. Governing Law</h2>
                <p>These terms are governed by the laws of India.</p>
                <p>Jurisdiction: Uttarakhand, India.</p>
            </section>
        </div>
    );
};

export default TermsOfService;
