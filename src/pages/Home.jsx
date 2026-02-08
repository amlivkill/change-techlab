import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                padding: '8rem 0',
                background: 'linear-gradient(to bottom, var(--bg-tertiary), var(--bg-primary))',
                borderBottom: '1px solid var(--border-color)'
            }}>
                <div className="container text-center">
                    <h1 className="h1 mb-2">
                        The AI Systems Factory <br />
                        <span className="text-accent">Built for Impact</span>
                    </h1>
                    <p className="text-lead mb-4" style={{ margin: '0 auto 2rem auto' }}>
                        We build fixed-scope, automation-first AI systems for NGOs, Enterprises, and CSR Projects.
                        <br />
                        <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>No consulting. No equity. Just delivered systems.</span>
                    </p>
                    <div className="flex-center" style={{ gap: '1rem' }}>
                        <Link to="/contact" className="btn btn-primary">Book a System</Link>
                        <Link to="/pricing" className="btn btn-outline">View Pricing</Link>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid-3">
                        <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-secondary)' }}>
                            <h3 className="h3 text-accent">Fixed Scope</h3>
                            <p className="text-small">No scope creep. We agree on the output, and we deliver exactly that on time.</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-secondary)' }}>
                            <h3 className="h3 text-accent">Automation First</h3>
                            <p className="text-small">We don't throw bodies at problems. We build systems that run themselves.</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-secondary)' }}>
                            <h3 className="h3 text-accent">Crystal Clear Costs</h3>
                            <p className="text-small">Transparent INR pricing. No hidden fees or retainer traps.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
