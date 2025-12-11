import { motion } from 'framer-motion'
import { Zap, Shield, Code, Layers, Network, Lock, Cpu, Globe, Boxes } from 'lucide-react'

const Features = () => {
    const features = [
        {
            icon: <Zap size={24} />,
            title: 'High Throughput',
            description: 'Optimized execution engine processing 1,400+ TPS with sub-second confirmation times.',
            badge: 'Performance'
        },
        {
            icon: <Shield size={24} />,
            title: 'L1 Security',
            description: 'Leveraging Ethereum security through optimistic rollups and rigorous fraud proof mechanisms.',
            badge: 'Security'
        },
        {
            icon: <Code size={24} />,
            title: 'EVM Equivalence',
            description: '100% compatibility with Ethereum tooling. Deploy Solidity contracts without modification.',
            badge: 'Developer'
        },
        {
            icon: <Boxes size={24} />,
            title: 'Modular Stack',
            description: 'Built on the OP Stack, allowing for interchangeable data availability and sequencing layers.',
            badge: 'Architecture'
        },
        {
            icon: <Globe size={24} />,
            title: 'Data Availability',
            description: 'Cost-effective data posting to Ethereum L1 with support for EIP-4844 blobs.',
            badge: 'Scaling'
        },
        {
            icon: <Lock size={24} />,
            title: 'Permissionless',
            description: 'Open network where anyone can run a node, verify the chain, and participate.',
            badge: 'Decentralized'
        }
    ]

    return (
        <section className="section" id="features" style={{ background: 'var(--bg-primary)', padding: '8rem 0' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginBottom: '6rem'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '100px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            marginBottom: '1.5rem',
                            color: 'var(--text-primary)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em'
                        }}
                    >
                        <Cpu size={14} /> INFRASTRUCTURE
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}
                    >
                        Modular Architecture
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{
                            maxWidth: '650px',
                            margin: '0 auto',
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6
                        }}
                    >
                        A complete suite of tools and protocols designed to power the next generation of decentralized applications.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="glass-card"
                            style={{
                                padding: '2.5rem',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                background: 'linear-gradient(145deg, rgba(20,20,23,0.6) 0%, rgba(15,15,18,0.8) 100%)',
                                borderRadius: '24px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            whileHover={{
                                y: -5,
                                borderColor: 'rgba(255, 255, 255, 0.25)',
                                boxShadow: '0 20px 40px -20px rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            {/* Hover Gradient Effect */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '200px',
                                background: 'radial-gradient(circle at 50% -20%, rgba(255,255,255,0.08), transparent 70%)',
                                opacity: 0.5,
                                transition: 'opacity 0.3s ease'
                            }} />

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '2rem',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <div style={{
                                    padding: '1rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    color: 'var(--accent-primary)'
                                }}>
                                    {feature.icon}
                                </div>
                                <span style={{
                                    padding: '0.35rem 0.85rem',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '100px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: 'var(--accent-primary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    {feature.badge}
                                </span>
                            </div>

                            <h3 style={{
                                marginBottom: '1rem',
                                fontSize: '1.5rem',
                                color: '#ffffff',
                                fontWeight: 700,
                                letterSpacing: '-0.02em'
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1.05rem',
                                lineHeight: '1.7'
                            }}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
