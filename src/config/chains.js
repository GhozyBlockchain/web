import { defineChain } from 'viem'
import { sepolia } from 'viem/chains'

// Ghozy L2 Chain Definition
export const ghozyL2 = defineChain({
    id: 5207,
    name: 'Ghozy L2',
    network: 'ghozy',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['http://localhost:8545'] },
        public: { http: ['http://localhost:8545'] },
    },
    blockExplorers: {
        default: { name: 'Ghozyscan', url: 'http://localhost:5174' },
    },
})

// Export L1 chain (Sepolia)
export const l1Chain = sepolia

// Export L2 chain (Ghozy)
export const l2Chain = ghozyL2

// All supported chains
export const supportedChains = [sepolia, ghozyL2]
