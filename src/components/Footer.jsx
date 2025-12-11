import { Github, Twitter, Disc } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="section" style={{
            background: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-color)',
            padding: '5rem 0 2rem 0',
        }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4rem', marginBottom: '4rem' }}>

                    <div style={{ maxWidth: '380px' }}>
                        <div style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
                            <img src="/logo.svg" alt="Ghozy Logo" style={{ height: '40px', width: 'auto' }} />
                            Ghozy L2
                        </div>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                            High-performance Layer 2 blockchain built on OP Stack. Secured by Ethereum, optimized for scale.
                        </p>
                        <div style={{
                            padding: '1rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            fontSize: '0.875rem',
                            color: 'var(--text-secondary)'
                        }}>
                            <strong style={{ color: 'var(--accent-primary)' }}>Chain ID:</strong> 5207<br />
                            <strong style={{ color: 'var(--accent-primary)' }}>Network:</strong> Ghozy Testnet<br />
                            <strong style={{ color: 'var(--accent-primary)' }}>L1:</strong> Ethereum Sepolia
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '5rem', flexWrap: 'wrap' }}>
                        <div>
                            <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Ecosystem</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li><a href="/bridge" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Bridge</a></li>
                                <li><a href="http://localhost:5174" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Explorer</a></li>
                                <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Apps</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Developers</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li><Link to="/docs" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Documentation</Link></li>
                                <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>GitHub</a></li>
                                <li><a href="http://localhost:5180" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Run a Node</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Connect</h4>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="hover:text-white"><Twitter size={24} /></a>
                                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="hover:text-white"><Github size={24} /></a>
                                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="hover:text-white"><Disc size={24} /></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                }}>
                    <div>© {new Date().getFullYear()} Ghozy Network.</div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'var(--text-muted)' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'var(--text-muted)' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
