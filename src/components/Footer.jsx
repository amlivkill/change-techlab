import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid var(--border-color)',
            marginTop: 'auto',
            backgroundColor: 'var(--bg-secondary)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h4 style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>CHANGE TechLab</h4>
                    <p className="text-small">AI Systems Factory. Built for Impact.</p>
                </div>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <span className="text-small">© 2026 CHANGE TechLab</span>
                    <Link to="/privacy" className="text-small">Privacy</Link>
                    <Link to="/terms" className="text-small">Terms</Link>
                    <Link to="/refund-policy" className="text-small">Refund Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
