import React from 'react';
import { Layers, Server, Code, Terminal, Book, Cpu, ArrowRightLeft, Shield, Trophy } from 'lucide-react';

export const docsNavigation = [
    {
        title: 'Introduction',
        icon: <Book size={18} />,
        items: [
            { title: 'What is Ghozy?', slug: 'introduction' },
            { title: 'Architecture', slug: 'architecture' },
        ]
    },
    {
        title: 'Network',
        icon: <Server size={18} />,
        items: [
            { title: 'Alpha Testnet', slug: 'alpha-testnet' },
            { title: 'Network Information', slug: 'network-info' },
            { title: 'Fees & Gas', slug: 'fees' },
        ]
    },
    {
        title: 'Developers',
        icon: <Code size={18} />,
        items: [
            { title: 'Getting Started', slug: 'getting-started' },
            { title: 'Deploying Contracts', slug: 'deploying' },
            { title: 'Verify Contracts', slug: 'verification' },
        ]
    },
    {
        title: 'Infrastructure',
        icon: <Terminal size={18} />,
        items: [
            { title: 'Run a Node', slug: 'run-node' },
            { title: 'Bridging Guide', slug: 'bridging' },
        ]
    },
    {
        title: 'Rewards',
        icon: <Trophy size={18} />,
        items: [
            { title: 'Points & Badges', slug: 'rewards-program' }
        ]
    }
];

export const docsContent = {
    'introduction': {
        title: 'What is Ghozy?',
        content: (
            <>
                <p className="docs-lead">
                    Ghozy is a high-performance Layer 2 blockchain built on the OP Stack. It inherits the security of Ethereum while providing significantly lower costs and faster transaction speeds.
                </p>
                <h3>Why Ghozy?</h3>
                <p>
                    Ghozy is designed for developers who need EVM compatibility without the prohibitive costs of Mainnet. By leveraging optimistic rollups, Ghozy bundles transactions and settles them on Ethereum, ensuring high throughput and rigorous security.
                </p>
                <div className="docs-grid">
                    <div className="docs-card">
                        <Layers size={24} className="text-accent" />
                        <h4>EVM Equivalent</h4>
                        <p>Deploy existing Ethereum smart contracts with no code changes.</p>
                    </div>
                    <div className="docs-card">
                        <Cpu size={24} className="text-accent" />
                        <h4>High Performance</h4>
                        <p>2-second block times and sub-cent transaction fees.</p>
                    </div>
                    <div className="docs-card">
                        <Shield size={24} className="text-accent" />
                        <h4>Ethereum Secured</h4>
                        <p>Inherits the decentralization and security of the Ethereum L1.</p>
                    </div>
                </div>
            </>
        )
    },
    'architecture': {
        title: 'Architecture',
        content: (
            <>
                <p>
                    Ghozy uses the <strong>OP Stack</strong>, a modular and open-source blueprint for highly scalable, highly interoperable blockchains.
                </p>
                <h3>Key Components</h3>
                <ul>
                    <li><strong>Sequencer:</strong> Receives transactions from users, creates blocks, and submits data to L1.</li>
                    <li><strong>Proposer:</strong> Submits output roots (state commitments) to L1 to allow for withdrawals.</li>
                    <li><strong>Batcher:</strong> Compresses and submits transaction data to L1 for data availability.</li>
                    <li><strong>Verifiers:</strong> Nodes that sync the chain by reading data from L1 and executing it to verify the state.</li>
                </ul>
            </>
        )
    },
    'network-info': {
        title: 'Network Information',
        content: (
            <>
                <p>Use the following connection details to interact with the Ghozy Testnet.</p>
                <div className="code-block">
                    <div className="code-header">Network Configuration</div>
                    <pre>{`Network Name: Ghozy Testnet
RPC URL: https://rpc.ghozy.com (Example)
Chain ID: 5207
Currency Symbol: ETH
Block Explorer: https://ghozyscan.vercel.app`}</pre>
                </div>
                <p className="mt-4">
                    <strong>L1 Network:</strong> Ethereum Sepolia
                </p>
            </>
        )
    },
    'alpha-testnet': {
        title: 'Alpha Testnet Guide',
        content: (
            <>
                <div className="alert alert-info">
                    <strong>Status:</strong> LIVE (Alpha Phase) 🟢
                </div>
                <p>
                    Welcome to the Ghozy Alpha Testnet. This is the first public iteration of our high-performance L2.
                </p>
                <h3>Goals</h3>
                <p>
                    The primary goal of this phase is <strong>Stability & Stress Testing</strong>. We allow anyone to run a replica node to test the peer-to-peer network and data synchronization capabilities of the OP Stack.
                </p>
                <h3>What to Expect</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Occasional Resets:</strong> As we tune gas parameters and upgrade contracts, the chain may be reset (Regenesis).</li>
                    <li><strong>Fake Funds:</strong> All ETH on this network is bridged from Sepolia. It has no real-world value.</li>
                    <li><strong>Bugs:</strong> You might encounter RPC timeouts or syncing issues. Please report them!</li>
                </ul>
                <h3>How to Participate</h3>
                <ol className="list-decimal pl-5 space-y-4 mb-4">
                    <li>
                        <strong>Access the Testnet Portal:</strong>
                        <p>Go to <a href="https://testnet-ghozy.vercel.app" target="_blank" className="text-accent underline font-semibold">Alpha Testnet Portal</a>.</p>
                    </li>
                    <li>
                        <strong>Connect Wallet:</strong>
                        <p>Click the "Connect Wallet" button in the top right. We support MetaMask, Rainbow, Rabby, and other EVM wallets. Ensure you are on the <strong>Sepolia</strong> or <strong>Ghozy Testnet</strong> network.</p>
                    </li>
                    <li>
                        <strong>Sign-In (SIWE):</strong>
                        <p>Upon connecting, you will be prompted to sign a message. This is <strong>Sign-In with Ethereum (SIWE)</strong>.</p>
                        <div className="alert alert-info text-sm">
                            It proves you own the wallet without costing any gas. This generates your session for the backend API.
                        </div>
                    </li>
                    <li>
                        <strong>Register Your Node:</strong>
                        <p>Once signed in, the "Run a Node" panel will appear. It provides a custom Docker command linked to your address. See <a href="https://testnet-ghozy.vercel.app/docs/run-node" target="_blank" className="text-accent underline">Run a Node Guide</a>.</p>
                    </li>
                    <li>
                        <strong>Bridge Assets:</strong>
                        <p>Use the <a href="/bridge" className="text-accent underline">Bridge</a> to move Sepolia ETH to Ghozy to pay for gas fees on L2.</p>
                    </li>
                </ol>
            </>
        )
    },
    'fees': {
        title: 'Fees & Gas',
        content: (
            <>
                <p>
                    Ghozy operates with a dual-fee market structure typical of OP Stack chains.
                </p>
                <h3>L2 Execution Fee</h3>
                <p>
                    The cost to execute your transaction on the L2. This is calculated as <code>gas_used * l2_base_fee</code>.
                </p>
                <h3>L1 Data Fee</h3>
                <p>
                    The cost to publish your transaction data to Ethereum L1. This is the primary cost driver for rollups and ensures data availability.
                </p>
            </>
        )
    },
    'getting-started': {
        title: 'Getting Started for Developers',
        content: (
            <>
                <p>
                    Developing on Ghozy is identical to developing on Ethereum. You can use your favorite tools like Hardhat, Foundry, Remix, and Viem.
                </p>
                <h3>Prerequisites</h3>
                <ul>
                    <li>Node.js v18+</li>
                    <li>An Ethereum wallet (e.g., MetaMask, Rabby)</li>
                    <li>Sepolia ETH for bridging</li>
                </ul>
            </>
        )
    },
    'deploying': {
        title: 'Deploying Contracts',
        content: (
            <>
                <h3>Using Hardhat</h3>
                <p>Configure your <code>hardhat.config.ts</code>:</p>
                <div className="code-block">
                    <pre>{`import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    ghozy: {
      url: "https://rpc.ghozy.com", // Replace with actual RPC
      chainId: 5207,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

export default config;`}</pre>
                </div>
            </>
        )
    },
    'verification': {
        title: 'Verify Contracts',
        content: (
            <>
                <p>
                    You can verify your smart contracts on our block explorer using the standard etherscan-compatible API.
                </p>
                <div className="code-block">
                    <pre>{`npx hardhat verify --network ghozy <ADDRESS> <CONSTRUCTOR_ARGS>`}</pre>
                </div>
            </>
        )
    },
    'run-node': {
        title: 'Running a Node',
        content: (
            <>
                <p>
                    Running a replica node allows you to verify the state of the Ghozy chain independently. It reads data from L1 (Sepolia) and syncs the L2 state. You earn <strong>GHOZY points</strong> for maintaining high uptime.
                </p>

                <div className="alert alert-info">
                    <strong>Note:</strong> Rewards are distributed based on the wallet address configured in your node environment.
                </div>

                <h3>Hardware Requirements</h3>
                <div className="docs-grid">
                    <div className="docs-card">
                        <h4>Minimum</h4>
                        <ul>
                            <li><strong>CPU:</strong> 2 Cores</li>
                            <li><strong>RAM:</strong> 8GB</li>
                            <li><strong>Storage:</strong> 100GB SSD</li>
                        </ul>
                    </div>
                    <div className="docs-card">
                        <h4>Recommended</h4>
                        <ul>
                            <li><strong>CPU:</strong> 4+ Cores</li>
                            <li><strong>RAM:</strong> 16GB+</li>
                            <li><strong>Storage:</strong> 500GB+ SSD NVMe</li>
                        </ul>
                    </div>
                </div>

                <h3>Prerequisites</h3>
                <p>To run a node, you must have <a href="https://docs.docker.com/get-docker/" target="_blank" className="text-accent underline">Docker installed</a> on your machine.</p>

                <h3>Method 1: Automatic (Recommended)</h3>
                <p>The easiest way to run a node is using our DApp configuration tool.</p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                    <li>Go to the <a href="https://testnet-ghozy.vercel.app" target="_blank" className="text-accent underline">Testnet Portal</a>.</li>
                    <li>Connect your Wallet and Sign In.</li>
                    <li>Open the <strong>"Run a Node"</strong> panel.</li>
                    <li>Copy the pre-generated Docker command which already includes your wallet address.</li>
                    <li>Paste and run it in your terminal.</li>
                </ol>

                <h3>Method 2: Manual Configuration</h3>
                <p>If you prefer to set it up manually via Docker:</p>

                <div className="code-block">
                    <div className="code-header">Run this command</div>
                    <pre>{`docker run -d --name ghozy-node \\
  -e ETH_ADDRESS=<YOUR_WALLET_ADDRESS> \\
  -p 9000:9000 \\
  ghozy/node:latest`}</pre>
                </div>
                <p className="mt-4">
                    <strong>Important:</strong> Replace <code>&lt;YOUR_WALLET_ADDRESS&gt;</code> with the customized address you want to receive rewards on.
                </p>

                <h3>Verifying Sync Status</h3>
                <p>You can check the logs to ensure your node is syncing correctly:</p>
                <div className="code-block">
                    <pre>{`docker logs -f ghozy-node`}</pre>
                </div>
                <p>You should see logs indicating <code>Imported new chain segment</code>.</p>
            </>
        )
    },
    'bridging': {
        title: 'Bridging Guide',
        content: (
            <>
                <p>
                    Moving assets between Ethereum Sepolia (L1) and Ghozy (L2) is handled by the Standard Bridge.
                </p>
                <h3>Deposits (L1 to L2)</h3>
                <p>
                    Deposits are typically fast (~2 minutes). ETH and ERC-20 tokens can be bridged using the <a href="/bridge" className="text-accent underline">Official Bridge</a>.
                </p>
                <h3>Withdrawals (L2 to L1)</h3>
                <p>
                    Withdrawals is a multi-step process:
                </p>
                <ol>
                    <li><strong>Initiate Withdrawal:</strong> Send transaction on L2.</li>
                    <li><strong>Wait for Finality:</strong> Wait for the output root to be proposed on L1 (~1 hour).</li>
                    <li><strong>Prove Withdrawal:</strong> Submit a proof to the L1 portal.</li>
                    <li><strong>Challenge Period:</strong> Wait 7 days for the dispute window.</li>
                    <li><strong>Finalize:</strong> Claim funds on L1.</li>
                </ol>
            </>
        )
    },
    'rewards-program': {
        title: 'Rewards & Gamification',
        content: (
            <>
                <p>
                    Ghozy incentivizes node operators with a gamified rewards system. Earn points, climb the leaderboard, and unlock exclusive badges.
                </p>
                <h3>Points System</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Heartbeat:</strong> +1 Point every minute your node is active and synced.</li>
                    <li><strong>Transactions/Bridging:</strong> +5/+50 Points.</li>
                </ul>

                <h3>Achievement Badges</h3>
                <p>stand out on the leaderboard by unlocking badges:</p>
                <div className="docs-grid">
                    <div className="docs-card">
                        <h4>🛡️ Guardian</h4>
                        <p>Maintain high uptime (1000+ minutes). Proves reliability.</p>
                    </div>
                    <div className="docs-card">
                        <h4>⚡ Power Node</h4>
                        <p>Accumulate over 5,000 Points. Shows long-term contribution.</p>
                    </div>
                    <div className="docs-card">
                        <h4>🚀 Early Adopter</h4>
                        <p>Join the network early and maintain 100+ minutes uptime.</p>
                    </div>
                </div>

                <h3>Security: Proof of Sync</h3>
                <div className="alert alert-warning">
                    <strong>Important:</strong> Only fully synced nodes earn points.
                </div>
                <p>
                    To prevent spam, Ghozy uses a <strong>Proof of Sync</strong> mechanism. Your node must verify it has the latest L2 block hash when sending heartbeats. If your node is offline or out of sync, your heartbeats will be rejected.
                </p>
            </>
        )
    }
};
