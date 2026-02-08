import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
    {
        title: "AI Compliance Automation",
        for: "NGOs, CSR, Section-8",
        problem: "Missed deadlines, manual filing errors, compliance risks.",
        solution: "Automated alert & filing readiness system.",
        scope: ["Calendar tracking", "Document repository", "Auto-reminders", "Compliance dashboard"],
        output: "Deployed Notion/Airtable Compliance System",
        delivery: "One-time Setup"
    },
    {
        title: "AI Proposal & DPR Engine",
        for: "Development Orgs, Consultancies",
        problem: "Hours spent formatting and writing initial drafts.",
        solution: "AI-driven draft generation from raw data/notes.",
        scope: ["Template management", "Content injection", "Formatting automation", "Export to PDF/Docx"],
        output: "Proposal Generator Tool",
        delivery: "One-time Setup"
    },
    {
        title: "AI Website Generator (Org-Grade)",
        for: "New NGOs, Project Sites",
        problem: "High cost of dev agencies for simple sites.",
        solution: "System to deploy professional sites rapidly.",
        scope: ["CMS setup", "Theme customization", "Content population", "Hosting config"],
        output: "Live, editable website",
        delivery: "One-time Setup"
    },
    {
        title: "AI Operations SOP Builder",
        for: "Scaling Organizations",
        problem: "Tribal knowledge lost; inconsistent processes.",
        solution: "AI extracts & formalizes SOPs from interviews/docs.",
        scope: ["Knowledge extraction", "SOP formatting", "Central knowledge base", "Search functionality"],
        output: "Digital SOP Library",
        delivery: "One-time Setup"
    },
    {
        title: "AI MIS & Reporting System",
        for: "Program Management",
        problem: "Scattered data, delayed reporting.",
        solution: "Centralized data ingestion & auto-reporting.",
        scope: ["Data connector setup", "Dashboard creation", "Auto-report generation", "Role-based access"],
        output: "Live MIS Dashboard",
        delivery: "Retainer Support Available"
    },
    {
        title: "AI Finance & Cost Control Automation",
        for: "CFOs, Finance Teams",
        problem: "Manual expense tracking & budget leakage.",
        solution: "Automated expense categorization & anomaly detection.",
        scope: ["Invoice OCR", "Budget mapping", "Variance alerts", "Report generation"],
        output: "Finance Control System",
        delivery: "Retainer Support"
    },
    {
        title: "AI Training Content Factory",
        for: "L&D, Community Training",
        problem: "Slow content creation for large audiences.",
        solution: "AI generates modules, quizzes, and summaries.",
        scope: ["Content generation", "Quiz creation", "LMS integration limits", "Multilingual support"],
        output: "Content Generator Workbench",
        delivery: "One-time Setup"
    },
    {
        title: "AI Carbon & Impact Reporting",
        for: "Sustainability Projects",
        problem: "Complex calculation & data gathering.",
        solution: "Automated data collection & standard impact calc.",
        scope: ["Data ingestion forms", "Carbon calcs", "Impact framework mapping", "PDF Report gen"],
        output: "Impact Reporting Portal",
        delivery: "Retainer Support"
    },
    {
        title: "AI CRM for NGOs & CSR",
        for: "Fundraising Teams",
        problem: "Lost donor data, missed follow-ups.",
        solution: "Relationship management with auto-prompts.",
        scope: ["Contact database", "Interaction tracking", "Donation history", "Email drafting"],
        output: "Deployed CRM System",
        delivery: "Retainer Support"
    },
    {
        title: "Custom AI Agents (Retainer)",
        for: "Complex Workflows",
        problem: "Unique bottlenecks requiring custom logic.",
        solution: "Bespsoke agents for specific tasks.",
        scope: ["Workflow analysis", "Agent development", "Integration testing", "Maintenance"],
        output: "Custom Functioning Agents",
        delivery: "Monthly Retainer"
    }
];

const Services = () => {
    return (
        <div className="container" style={{ padding: '4rem 20px' }}>
            <header className="text-center mb-4">
                <h1 className="h2">System Catalog</h1>
                <p className="text-lead" style={{ margin: '0 auto' }}>Fixed-scope AI systems ready for deployment.</p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {servicesData.map((s, index) => (
                    <div key={index} id={`service-${index}`} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '3rem',
                        paddingBottom: '4rem',
                        borderBottom: '1px solid var(--border-color)'
                    }}>
                        <div>
                            <h2 className="h3 mb-1" style={{ color: 'var(--text-accent)' }}>{s.title}</h2>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>For</strong>
                                <span style={{ fontSize: '1.1rem' }}>{s.for}</span>
                            </div>
                            <div className="mb-1">
                                <span style={{
                                    display: 'inline-block',
                                    padding: '4px 12px',
                                    background: 'rgba(0, 255, 157, 0.1)',
                                    color: 'var(--accent-color)',
                                    borderRadius: '100px',
                                    fontSize: '0.85rem'
                                }}>
                                    {s.delivery}
                                </span>
                            </div>
                            <Link to="/contact" className="btn btn-outline" style={{ marginTop: '1rem' }}>Book This System</Link>
                        </div>

                        <div className="grid-2" style={{ alignItems: 'start' }}>
                            <div>
                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Problem</strong>
                                <p className="text-small mb-2">{s.problem}</p>

                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>System Solution</strong>
                                <p className="text-small">{s.solution}</p>
                            </div>
                            <div>
                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Scope</strong>
                                <ul className="text-small mb-2" style={{ listStyle: 'disc', listStylePosition: 'inside' }}>
                                    {s.scope.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>

                                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Final Output</strong>
                                <div style={{
                                    padding: '1rem',
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '4px',
                                    fontWeight: '600'
                                }}>
                                    {s.output}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center" style={{ marginTop: '4rem' }}>
                <h3 className="h3 mb-2">Ready to deploy?</h3>
                <Link to="/contact" className="btn btn-primary">Start System Booking</Link>
            </div>
        </div>
    );
};

export default Services;
