import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    const steps = [
        { title: "1. Select System", desc: "Choose the exact automation system you need from our catalog." },
        { title: "2. Lock Scope", desc: "We sign a fixed-scope agreement. No hourly billing." },
        { title: "3. Build & Deploy", desc: "We deploy the system on your infrastructure." },
        { title: "4. Handover", desc: "You own the code/system. We train your team." }
    ];

    return (
        <div className="container" style={{ padding: '6rem 20px' }}>
            <header className="text-center mb-4">
                <h1 className="h2">Execution Model</h1>
                <p className="text-lead" style={{ margin: '0 auto' }}>From booking to handover in 4 steps.</p>
            </header>

            <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto', gap: '3rem' }}>
                {steps.map((step, i) => (
                    <div key={i} style={{ padding: '2rem', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', borderRadius: '4px' }}>
                        <h3 className="h3 mb-1" style={{ color: 'var(--primary-color)' }}>{step.title}</h3>
                        <p className="text-secondary">{step.desc}</p>
                    </div>
                ))}
            </div>

            <div className="text-center" style={{ marginTop: '4rem' }}>
                <Link to="/services" className="btn btn-primary">View Catalog</Link>
            </div>
        </div>
    );
};

export default HowItWorks;
