// Contract Addresses on Sepolia L1
// Updated: 2025-12-13 - Aligned with docker/rollup.json (newest deployment)
export const CONTRACTS = {
    // L1 Contracts (Sepolia) - Newest Deployment matching rollup.json
    OptimismPortal: '0x5e6e0817254264442bf496005c74816b454af681',      // deposit_contract_address in rollup.json
    L1StandardBridge: '0x6304023CfDf8dEfCA44e66368064126644cD920b',    // Queried from SystemConfig
    L1CrossDomainMessenger: '0x3cAeb0AC0E7035D7196d90b0FC42EDDebC0F79fB', // Queried from SystemConfig
    SystemConfig: '0x644b18222b48a5230c64eba215cb2d2f9e8f75f2',        // l1_system_config_address in rollup.json
    DisputeGameFactory: '0x0000000000000000000000000000000000000000',  // Not deployed in this version
    L2OutputOracle: '0x0000000000000000000000000000000000000000',      // Not deployed in this version


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
