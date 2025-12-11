import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Medal, User, ArrowUpRight } from 'lucide-react'

const Leaderboard = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        fetch(`${API_URL}/leaderboard`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
            .catch(err => {
                console.error("Failed to load leaderboard", err)
                setLoading(false)
            })
    }, [])

    const getRankIcon = (index) => {
        if (index === 0) return <Trophy size={20} color="#FFD700" />
        if (index === 1) return <Medal size={20} color="#C0C0C0" />
        if (index === 2) return <Medal size={20} color="#CD7F32" />
        return <span style={{ fontWeight: 700, color: 'var(--text-muted)' }}>{index + 1}</span>
    }

    return (
        <section className="section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
                        Incentivized Testnet
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                        Top contributors and node runners on Ghozy L2.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '80px 1fr 150px 150px',
                        padding: '1.5rem',
                        borderBottom: '1px solid var(--border-color)',
                        color: 'var(--text-muted)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        <div>Rank</div>
                        <div>User</div>
                        <div style={{ textAlign: 'right' }}>Tx Count</div>
                        <div style={{ textAlign: 'right' }}>Points</div>
                    </div>

                    {loading ? (
                        <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Loading...</div>
                    ) : users.length === 0 ? (
                        <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-secondary)' }}>No entries yet. Be the first!</div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {users.map((user, index) => (
                                <div key={user.address} style={{
                                    display: 'grid',
                                    gridTemplateColumns: '80px 1fr 150px 150px',
                                    padding: '1.25rem 1.5rem',
                                    borderBottom: '1px solid rgba(255,255,255,0.03)',
                                    alignItems: 'center',
                                    color: 'white',
                                    transition: 'background 0.2s',
                                    cursor: 'default'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '0.5rem' }}>
                                        {getRankIcon(index)}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'monospace', fontSize: '1rem' }}>
                                        <div style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            background: `hsl(${parseInt(user.address, 16) % 360}, 60%, 50%)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.75rem',
                                            fontWeight: 700
                                        }}>
                                            {user.address.substr(2, 2)}
                                        </div>
                                        {user.address}
                                    </div>
                                    <div style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>
                                        {user.tx_count}
                                    </div>
                                    <div style={{ textAlign: 'right', fontWeight: 700, color: 'var(--accent-primary)' }}>
                                        {user.points.toLocaleString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default Leaderboard
