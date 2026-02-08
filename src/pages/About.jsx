import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container" style={{ padding: '6rem 20px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="h2 mb-2">About CHANGE TechLab</h1>
                <p className="text-lead mb-4">
                    We are the commercial systems factory of the CHANGE ecosystem.
                </p>

                <div style={{ padding: '2rem', background: 'var(--bg-tertiary)', borderLeft: '4px solid var(--accent-color)', marginBottom: '4rem' }}>
                    <h3 className="h3">Commercial Entity vs. Foundation</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>CHANGE TechLab</strong> is a for-profit AI systems factory. We sell fixed-scope automation products to NGOs, CSR, and Enterprises. We do not accept donations. We deliver outputs.
                    </p>
                    <p>
                        <strong>CHANGE Foundation</strong> is a Section-8 non-profit focused on research and open-source advocacy.
                    </p>
                </div>

                <h3 className="h3 mb-2">Our Operating Model</h3>
                <ul className="mb-4" style={{ listStyle: 'none' }}>
                    <li className="mb-1" style={{ display: 'flex', gap: '1rem' }}>
                        <span style={{ color: 'var(--text-accent)' }}>✓</span>
                        <span><strong>Execution Focused:</strong> We don't just advise; we build and deploy.</span>
                    </li>
                    <li className="mb-1" style={{ display: 'flex', gap: '1rem' }}>
                        <span style={{ color: 'var(--text-accent)' }}>✓</span>
                        <span><strong>Zero Fluff:</strong> No consulting jargon. Just working code.</span>
                    </li>
                    <li className="mb-1" style={{ display: 'flex', gap: '1rem' }}>
                        <span style={{ color: 'var(--text-accent)' }}>✓</span>
                        <span><strong>Fixed Pricing:</strong> You know exactly what you pay and what you get.</span>
                    </li>
                </ul>

                <Link to="/contact" className="btn btn-primary">Work With Us</Link>
            </div>
        </div>
    );
};

export default About;
