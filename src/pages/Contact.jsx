import React, { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const Contact = () => {
    const [formData, setFormData] = useState({
        organization: '',
        email: '',
        system: '',
        context: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Submission failed');
            }

            setStatus({ type: 'success', message: 'Thank you! We will contact you soon.' });
            setFormData({ organization: '', email: '', system: '', context: '' });
        } catch (error) {
            setStatus({ type: 'error', message: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container" style={{ padding: '6rem 20px' }}>
            <div className="grid-2" style={{ alignItems: 'start' }}>
                <div>
                    <h1 className="h2 mb-2">Book a System</h1>
                    <p className="text-lead mb-4">
                        Ready to deploy? Fill out the form to initiate a fixed-scope engagement.
                    </p>

                    <div className="mb-4">
                        <h3 className="h3">Direct Contact</h3>
                        <p className="text-secondary">systems@changetechlab.com</p>
                        <p className="text-secondary">+91 99999 99999 (Office)</p>
                    </div>
                </div>

                <form style={{
                    background: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)'
                }} onSubmit={handleSubmit}>

                    {status.message && (
                        <div style={{
                            padding: '1rem',
                            marginBottom: '1rem',
                            borderRadius: '6px',
                            backgroundColor: status.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                            color: status.type === 'success' ? '#22c55e' : '#ef4444',
                            border: `1px solid ${status.type === 'success' ? '#22c55e' : '#ef4444'}`
                        }}>
                            {status.message}
                        </div>
                    )}

                    <div className="mb-1">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Organization Name</label>
                        <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="e.g. Acme Foundation"
                            required
                        />
                    </div>

                    <div className="mb-1">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@organization.com"
                            required
                        />
                    </div>

                    <div className="mb-1">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>System of Interest</label>
                        <select
                            name="system"
                            value={formData.system}
                            onChange={handleChange}
                            required
                            style={{ cursor: 'pointer' }}
                        >
                            <option value="">Select a System...</option>
                            <option value="Compliance">Compliance Automation</option>
                            <option value="Proposal">Proposal / DPR Engine</option>
                            <option value="Website">Website Generator</option>
                            <option value="SOP">SOP Builder</option>
                            <option value="MIS">MIS &amp; Reporting</option>
                            <option value="Finance">Finance Automation</option>
                            <option value="Training">Training Factory</option>
                            <option value="Carbon">Carbon &amp; Impact</option>
                            <option value="CRM">NGO / CSR CRM</option>
                            <option value="Agents">Custom AI Agents</option>
                        </select>
                    </div>

                    <div className="mb-2">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Additional Context</label>
                        <textarea
                            name="context"
                            value={formData.context}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Briefly describe your requirements..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Request Booking'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
