import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const location = useLocation()
    const isBridgePage = location.pathname === '/bridge'
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <div style={{
                position: 'fixed',
                top: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'calc(100% - 3rem)',
                maxWidth: 'var(--spacing-container)',
                zIndex: 100
            }}>
                <motion.nav
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className="navbar"
                    style={{
                        background: 'rgba(15, 15, 20, 0.6)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '0.75rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1.5rem',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        width: '100%',
                        position: 'relative'
                    }}
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={closeMobileMenu}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            textDecoration: 'none',
                            flexShrink: 0,
                            zIndex: 101
                        }}
                    >
                        <img
                            src="/logo.svg"
                            alt="Ghozy Logo"
                            style={{ width: '40px', height: '40px' }}
                        />
                        <span style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            letterSpacing: '-0.02em',
                            color: 'white',
                            whiteSpace: 'nowrap'
                        }}>
                            Ghozy
                        </span>
                    </Link>

                    {/* Desktop Links - Centered */}
                    <div
                        className="navbar-links"
                        style={{
                            display: 'flex',
                            gap: '2rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: '1 1 auto',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Link
                            to="/bridge"
                            className="nav-link"
                            style={{
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Bridge
                        </Link>
                        <a
                            href="http://localhost:5174"
                            className="nav-link"
                            style={{
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Explorer
                        </a>

                        <Link
                            to="/docs"
                            className="nav-link"
                            style={{
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Docs
                        </Link>
                    </div>

                    {/* Desktop Actions - Right aligned */}
                    <div
                        className="navbar-actions"
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            flexShrink: 0,
                            alignItems: 'center',
                            gap: '1rem'
                        }}
                    >
                        {isBridgePage ? (
                            <div className="desktop-connect-button" style={{ transform: 'scale(0.95)' }}>
                                <ConnectButton
                                    chainStatus="icon"
                                    showBalance={false}
                                    accountStatus="address"
                                />
                            </div>
                        ) : (
                            <a
                                href="http://localhost:5180"
                                className="btn btn-primary desktop-action-button"
                                style={{
                                    padding: '0.7rem 1.5rem',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Alpha Testnet
                            </a>
                        )}

                        {/* Mobile Burger Button */}
                        <button
                            className="mobile-menu-button"
                            onClick={toggleMobileMenu}
                            style={{
                                display: 'none',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                borderRadius: '8px',
                                transition: 'background 0.2s',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={closeMobileMenu}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.7)',
                                backdropFilter: 'blur(4px)',
                                zIndex: 99
                            }}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="mobile-menu"
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: 'min(320px, 85vw)',
                                background: 'rgba(15, 15, 20, 0.98)',
                                backdropFilter: 'blur(20px)',
                                borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                                zIndex: 102,
                                padding: '6rem 2rem 2rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                overflowY: 'auto',
                                boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            {/* Mobile Links */}
                            <Link
                                to="/bridge"
                                onClick={closeMobileMenu}
                                className="mobile-nav-link"
                                style={{
                                    padding: '1rem 1.25rem',
                                    borderRadius: '12px',
                                    background: location.pathname === '/bridge' ? 'rgba(49, 175, 118, 0.15)' : 'transparent',
                                    border: location.pathname === '/bridge' ? '1px solid rgba(49, 175, 118, 0.3)' : '1px solid transparent',
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    transition: 'all 0.2s'
                                }}
                            >
                                Bridge
                            </Link>

                            <a
                                href="http://localhost:5174"
                                onClick={closeMobileMenu}
                                className="mobile-nav-link"
                                style={{
                                    padding: '1rem 1.25rem',
                                    borderRadius: '12px',
                                    background: 'transparent',
                                    border: '1px solid transparent',
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    transition: 'all 0.2s'
                                }}
                            >
                                Explorer
                            </a>



                            <Link
                                to="/docs"
                                onClick={closeMobileMenu}
                                className="mobile-nav-link"
                                style={{
                                    padding: '1rem 1.25rem',
                                    borderRadius: '12px',
                                    background: 'transparent',
                                    border: '1px solid transparent',
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    transition: 'all 0.2s'
                                }}
                            >
                                Docs
                            </Link>

                            <div style={{
                                marginTop: '1rem',
                                paddingTop: '1.5rem',
                                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                            }}>
                                {isBridgePage ? (
                                    <div style={{ transform: 'scale(0.95)' }}>
                                        <ConnectButton
                                            chainStatus="icon"
                                            showBalance={false}
                                            accountStatus="address"
                                        />
                                    </div>
                                ) : (
                                    <a
                                        href="http://localhost:5180"
                                        className="btn btn-primary"
                                        style={{
                                            width: '100%',
                                            padding: '1rem 1.5rem',
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            textAlign: 'center',
                                            display: 'block',
                                            textDecoration: 'none',
                                            background: 'white',
                                            color: 'black'
                                        }}
                                    >
                                        Alpha Testnet
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
