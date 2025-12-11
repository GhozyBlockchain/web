// Contract Addresses on Sepolia L1
// Updated: 2025-12-10 - Fixed deposit contract address
export const CONTRACTS = {
    // L1 Contracts (Sepolia) - Official OP Stack Proxies
    OptimismPortal: '0xdf56d998d66c78638a1af1f4700e68f8b549cc3e',      // v5.2.0 - THE CORRECT DEPOSIT CONTRACT
    L1StandardBridge: '0xaae3af48b07a6509ea1490d5560e4bf2cf8782c8',    // v2.8.0
    L1CrossDomainMessenger: '0x70e42bbb5d6e5e99b8d31cf69c5ef3717f0b27b2', // v2.11.0
    SystemConfig: '0xbbcac69828f3d9f2809e118b0bb421d9e84dca4c',        // v3.13.1
    DisputeGameFactory: '0x92921e8E5C603Ddac18F6BBF553f7fA63e46c2C6',
    L2OutputOracle: '0x8D51E02B01e633B4f1e665acbF6cE1504b886664',      // v1.4.0 (custom)

    // L2 Contracts (Ghozy) - Standard OP Stack predeploys
    L2StandardBridge: '0x4200000000000000000000000000000000000010',
    L2CrossDomainMessenger: '0x4200000000000000000000000000000000000007',
    L2ToL1MessagePasser: '0x4200000000000000000000000000000000000016',
}

// Minimal ABI for OptimismPortal depositTransaction
export const OPTIMISM_PORTAL_ABI = [
    {
        name: 'depositTransaction',
        type: 'function',
        stateMutability: 'payable',
        inputs: [
            { name: '_to', type: 'address' },
            { name: '_value', type: 'uint256' },
            { name: '_gasLimit', type: 'uint64' },
            { name: '_isCreation', type: 'bool' },
            { name: '_data', type: 'bytes' }
        ],
        outputs: []
    },
    {
        name: 'minimumGasLimit',
        type: 'function',
        stateMutability: 'view',
        inputs: [{ name: '_byteCount', type: 'uint64' }],
        outputs: [{ name: '', type: 'uint64' }]
    }
]

// Minimal ABI for L2ToL1MessagePasser (withdrawal initiation)
export const L2_TO_L1_MESSAGE_PASSER_ABI = [
    {
        name: 'initiateWithdrawal',
        type: 'function',
        stateMutability: 'payable',
        inputs: [
            { name: '_target', type: 'address' },
            { name: '_gasLimit', type: 'uint256' },
            { name: '_data', type: 'bytes' }
        ],
        outputs: []
    }
]

// Minimal ABI for L2StandardBridge
export const L2_STANDARD_BRIDGE_ABI = [
    {
        name: 'withdraw',
        type: 'function',
        stateMutability: 'payable',
        inputs: [
            { name: '_l2Token', type: 'address' },
            { name: '_amount', type: 'uint256' },
            { name: '_minGasLimit', type: 'uint32' },
            { name: '_extraData', type: 'bytes' }
        ],
        outputs: []
    },
    {
        name: 'bridgeETHTo',
        type: 'function',
        stateMutability: 'payable',
        inputs: [
            { name: '_to', type: 'address' },
            { name: '_minGasLimit', type: 'uint32' },
            { name: '_extraData', type: 'bytes' }
        ],
        outputs: []
    }
]

// Challenge period for withdrawals (7 days in seconds)
export const CHALLENGE_PERIOD = 7 * 24 * 60 * 60
