import { motion } from 'framer-motion'
import { Clock, DollarSign, Shield, Database, Zap, Network, Activity, Cpu, Layers } from 'lucide-react'

const Stats = () => {
    const stats = [
        {
            icon: <Clock size={20} />,
            label: 'Block Time',
            value: '2s',
            sub: 'Finality',
            colSpan: 1
        },
        {
            icon: <DollarSign size={20} />,
            label: 'Avg. Cost',
            value: '<$0.01',
            sub: 'Per Tx',
            colSpan: 1
        },
        {
            icon: <Zap size={20} />,
            label: 'Throughput',
            value: '1,400+',
            sub: 'TPS',
            colSpan: 1
        },
        {
            icon: <Database size={20} />,
            label: 'L2 Gas Limit',
            value: '60M',
            sub: 'Per Block',
            colSpan: 2
        },
        {
            icon: <Activity size={20} />,
            label: 'Network Status',
            value: 'Healthy',
            sub: '99.9% Uptime',
            colSpan: 1
        },
        {
            icon: <Shield size={20} />,
            label: 'Security',
            value: 'Ethereum L1',
            sub: 'Optimistic Rollup',
            colSpan: 3
        },
    ]

    return (
        <section className="section" style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            background: 'linear-gradient(180deg, rgba(5,5,5,1) 0%, rgba(10,10,12,1) 100%)',
            padding: '8rem 0'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '5rem',
                    textAlign: 'center'
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
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '100px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            marginBottom: '1.5rem',
                            color: 'var(--accent-primary)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em'
                        }}
                    >
                        <Activity size={14} /> LIVE METRICS
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            marginBottom: '1.5rem',
                            lineHeight: 1.1,
                            background: 'linear-gradient(to right, #ffffff, #666666)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Network Performance
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}
                    >
                        Real-time performance metrics from the Ghozy Sepolia Testnet.
                    </motion.p>
                </div>

                <div className="stats-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="glass-card"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '24px',
                                position: 'relative',
                                overflow: 'hidden',
                                height: '100%'
                            }}
                            whileHover={{
                                y: -5,
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 10px 40px -10px rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '100px',
                                height: '100px',
                                background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 70%)',
                                zIndex: 0
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
                                    padding: '0.75rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '12px',
                                    color: 'var(--text-secondary)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                }}>
                                    {stat.icon}
                                </div>
                                <span style={{
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--accent-primary)',
                                    fontWeight: 600
                                }}>
                                    {stat.sub}
                                </span>
                            </div>

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: 800,
                                    background: 'linear-gradient(to right, #ffffff, #888888)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    letterSpacing: '-0.03em',
                                    lineHeight: 1,
                                    marginBottom: '0.5rem'
                                }}>
                                    {stat.value}
                                </div>
                                <div style={{
                                    color: 'var(--text-secondary)',
                                    fontWeight: 500
                                }}>
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats
