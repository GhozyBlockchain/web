import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownUp, Clock, CheckCircle, Loader2 } from 'lucide-react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useBalance, useWriteContract, useWaitForTransactionReceipt, useSwitchChain } from 'wagmi'
import { parseEther } from 'viem'
import { l1Chain, l2Chain } from '../config/chains'
import { CONTRACTS, L2_STANDARD_BRIDGE_ABI } from '../config/contracts'
import ColorBends from './ColorBends'

const Bridge = () => {
    const [direction, setDirection] = useState('deposit') // 'deposit' or 'withdraw'
    const [amount, setAmount] = useState('')
    const { address, isConnected, chain } = useAccount()
    const { switchChain } = useSwitchChain()

    const isDeposit = direction === 'deposit'
    const sourceChain = isDeposit ? l1Chain : l2Chain
    const destChain = isDeposit ? l2Chain : l1Chain

    // Get balance on source chain (Sepolia for deposit, Ghozy for withdraw)
    const { data: balance, isLoading: balanceLoading, refetch: refetchBalance } = useBalance({
        address,
        chainId: sourceChain.id,
        query: {
            enabled: !!address,
            refetchInterval: 5000, // Refetch every 5 seconds
        }
    })

    // Contract write
    const { data: txHash, isPending, writeContract, error: txError } = useWriteContract()
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: txHash })

    // Format balance safely
    const formatBalance = () => {
        if (balanceLoading) return 'Loading...'
        if (!balance) return '0.0000'
        const value = parseFloat(balance.formatted)
        if (isNaN(value)) return '0.0000'
        return value.toFixed(4)
    }

    const handleBridge = async () => {
        if (!amount || !address) return

        try {
            const amountWei = parseEther(amount)

            if (isDeposit) {
                // Deposit via L1StandardBridge.bridgeETHTo
                // This is the standard way to bridge ETH (handles L1CrossDomainMessenger > OptimismPortal internally)
                writeContract({
                    address: CONTRACTS.L1StandardBridge,
                    abi: L2_STANDARD_BRIDGE_ABI, // L1 and L2 bridges share the same interface for bridgeETHTo
                    functionName: 'bridgeETHTo',
                    args: [
                        address,           // _to: recipient on L2
                        200000,            // _minGasLimit
                        '0x'               // _extraData
                    ],
                    value: amountWei,
                    chainId: l1Chain.id,
                })
            } else {
                // Withdraw via L2StandardBridge.bridgeETHTo
                writeContract({
                    address: CONTRACTS.L2StandardBridge,
                    abi: L2_STANDARD_BRIDGE_ABI,
                    functionName: 'bridgeETHTo',
                    args: [
                        address,           // _to: recipient on L1
                        200000,            // _minGasLimit
                        '0x'               // _extraData
                    ],
                    value: amountWei,
                    chainId: l2Chain.id,
                })
            }
        } catch (err) {
            console.error('Bridge error:', err)
        }
    }

    const switchDirection = () => {
        setDirection(isDeposit ? 'withdraw' : 'deposit')
        setAmount('')
    }

    const isWrongChain = isConnected && chain?.id !== sourceChain.id

    return (
        <section id="bridge" className="section" style={{ position: 'relative', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem', overflow: 'hidden' }}>
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
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '480px', margin: '0 auto' }}
                >
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Bridge</h2>
                        <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                            Transfer ETH between Sepolia and Ghozy L2
                        </p>
                    </div>

                    {/* Bridge Card */}
                    <div className="card" style={{ padding: '1.5rem' }}>

                        {/* From Chain */}
                        <div style={{ marginBottom: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>From</label>
                            <div style={{
                                background: 'var(--bg-secondary)',
                                borderRadius: '12px',
                                padding: '1rem',
                                marginTop: '0.5rem'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                    <span style={{ fontWeight: '600' }}>{sourceChain.name}</span>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                        Balance: {formatBalance()} ETH
                                    </span>
                                </div>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0.0"
                                    step="0.001"
                                    min="0"
                                    style={{
                                        width: '100%',
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        fontSize: '1.75rem',
                                        fontWeight: '700',
                                        color: 'var(--text-primary)'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Switch Direction Button */}
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0' }}>
                            <button
                                onClick={switchDirection}
                                style={{
                                    background: 'var(--bg-card)',
                                    border: '2px solid var(--border-color)',
                                    borderRadius: '12px',
                                    padding: '0.75rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <ArrowDownUp size={20} color="var(--accent-primary)" />
                            </button>
                        </div>

                        {/* To Chain */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>To</label>
                            <div style={{
                                background: 'var(--bg-secondary)',
                                borderRadius: '12px',
                                padding: '1rem',
                                marginTop: '0.5rem'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: '600' }}>{destChain.name}</span>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                        You receive
                                    </span>
                                </div>
                                <div style={{ fontSize: '1.75rem', fontWeight: '700', marginTop: '0.5rem' }}>
                                    {amount || '0.0'} ETH
                                </div>
                            </div>
                        </div>

                        {/* Withdrawal Warning */}
                        {!isDeposit && (
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                padding: '0.75rem 1rem',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.75rem'
                            }}>
                                <Clock size={18} color="var(--text-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <div style={{ fontSize: '0.85rem' }}>
                                    <strong style={{ color: 'var(--text-primary)' }}>7-day waiting period</strong>
                                    <p style={{ margin: '0.25rem 0 0', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                                        Withdrawals require a 7-day challenge period before you can claim on L1.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Error Display */}
                        {txError && (
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '8px',
                                padding: '0.75rem 1rem',
                                marginBottom: '1rem',
                                fontSize: '0.85rem',
                                color: 'var(--text-primary)'
                            }}>
                                Transaction failed. Please try again.
                            </div>
                        )}

                        {/* Transaction Status */}
                        {txHash && (
                            <div style={{
                                background: isSuccess ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255,255,255,0.05)',
                                borderRadius: '8px',
                                padding: '0.75rem 1rem',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}>
                                {isConfirming ? (
                                    <Loader2 size={18} color="var(--accent-primary)" className="animate-spin" />
                                ) : isSuccess ? (
                                    <CheckCircle size={18} color="var(--accent-primary)" />
                                ) : null}
                                <span style={{ fontSize: '0.85rem' }}>
                                    {isConfirming ? 'Confirming...' : isSuccess ? 'Transaction confirmed!' : 'Transaction sent'}
                                </span>
                            </div>
                        )}

                        {/* Action Button */}
                        {!isConnected ? (
                            <ConnectButton.Custom>
                                {({ openConnectModal }) => (
                                    <button
                                        onClick={openConnectModal}
                                        className="btn btn-primary"
                                        style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
                                    >
                                        Connect Wallet
                                    </button>
                                )}
                            </ConnectButton.Custom>
                        ) : isWrongChain ? (
                            <button
                                onClick={() => switchChain({ chainId: sourceChain.id })}
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
                            >
                                Switch to {sourceChain.name}
                            </button>
                        ) : (
                            <button
                                onClick={handleBridge}
                                disabled={!amount || isPending || isConfirming}
                                className="btn btn-primary"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    fontSize: '1rem',
                                    opacity: (!amount || isPending || isConfirming) ? 0.5 : 1,
                                    cursor: (!amount || isPending || isConfirming) ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isPending ? 'Confirm in wallet...' : isConfirming ? 'Confirming...' : isDeposit ? 'Bridge' : 'Withdraw'}
                            </button>
                        )}

                        {/* Deposit Info */}
                        {isDeposit && (
                            <p style={{
                                textAlign: 'center',
                                fontSize: '0.8rem',
                                color: 'var(--text-secondary)',
                                marginTop: '1rem',
                                marginBottom: 0
                            }}>
                                Deposits arrive on L2 in ~1-2 minutes
                            </p>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Bridge
