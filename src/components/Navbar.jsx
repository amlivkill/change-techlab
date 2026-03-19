import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            height: 'var(--header-height)',
            borderBottom: '1px solid var(--border-color)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000
        }}>
            <div className="container" style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo */}
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none'
                }}>
                    <img
                        src="/techlab-logo.png"
                        alt="CHANGE TechLab Logo"
                        style={{ height: '40px', width: 'auto' }}
                    />
                    <span style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        letterSpacing: '-1px',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase'
                    }}>
                        CHANGE <span style={{ color: 'var(--primary-color)' }}>TechLab</span>
                    </span>
                </Link>

                {/* Links */}
                <ul style={{ display: 'flex', gap: '2rem' }} className="nav-links">
                    <li><Link to="/services" style={{ fontSize: '0.9rem', fontWeight: '500' }}>Services</Link></li>
                    <li><Link to="/pricing" style={{ fontSize: '0.9rem', fontWeight: '500' }}>Pricing</Link></li>
                    <li><Link to="/how-it-works" style={{ fontSize: '0.9rem', fontWeight: '500' }}>How It Works</Link></li>
                    <li><Link to="/about" style={{ fontSize: '0.9rem', fontWeight: '500' }}>About</Link></li>
                    <li>
                        <a
                            href="https://amlivkill.github.io/Foundation-Website-Ver-0.0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '0.9rem', fontWeight: '500' }}
                        >
                            🏔️ Foundation
                        </a>
                    </li>
                </ul>

                {/* CTA */}
                <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '10px 24px' }}>
                    Book a System
                </Link>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;