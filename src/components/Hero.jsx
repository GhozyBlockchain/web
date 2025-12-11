import { motion } from 'framer-motion'
import { ArrowRight, Layers, Zap, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'
import ColorBends from './ColorBends';

const Hero = () => {
    return (
        <section className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--bg-primary)'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <ColorBends
                    colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
                    rotation={0}
                    autoRotate={0}
                    speed={0.2}
                    scale={1}
                    frequency={1}
                    warpStrength={1}
                    mouseInfluence={1}
                    parallax={0.5}
                    noise={0.1}
                    transparent
                />
            </div>

            <div className="container" style={{ textAlign: 'center', maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 style={{
                        marginBottom: '1.5rem',
                        fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                        letterSpacing: '-0.05em',
                        lineHeight: '1.1',
                        color: '#ffffff'
                    }}>
                        High-Performance<br />
                        <span style={{
                            background: 'linear-gradient(to right, #ffffff, #666666)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 800
                        }}>Layer 2 Blockchain</span>
                    </h1>

                    <p style={{
                        fontSize: '1.375rem',
                        marginBottom: '1rem',
                        lineHeight: '1.7',
                        maxWidth: '700px',
                        marginInline: 'auto',
                        color: 'var(--text-secondary)',
                        fontWeight: 400
                    }}>
                        Built on OP Stack. High-throughput, low-cost, EVM-compatible Layer 2 secured by Ethereum.
                    </p>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2rem',
                        marginBottom: '2.5rem',
                        marginTop: '2rem',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                            <Activity size={18} style={{ color: 'var(--accent-primary)' }} />
                            <span style={{ fontSize: '0.95rem' }}>2s Block Time</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                            <Layers size={18} style={{ color: 'var(--accent-primary)' }} />
                            <span style={{ fontSize: '0.95rem' }}>60M Gas Limit</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                            <Zap size={18} style={{ color: 'var(--accent-primary)' }} />
                            <span style={{ fontSize: '0.95rem' }}>1,400+ TPS</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/bridge" className="btn btn-primary" style={{ padding: '1.125rem 2.5rem', fontSize: '1rem', fontWeight: 600 }}>
                            Bridge Assets <ArrowRight size={18} />
                        </Link>
                        <Link to="/docs" className="btn btn-outline" style={{ padding: '1.125rem 2.5rem', fontSize: '1rem', fontWeight: 600 }}>
                            View Documentation
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
