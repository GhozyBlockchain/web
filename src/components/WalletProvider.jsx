import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultConfig, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { WagmiProvider, http } from 'wagmi'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { l1Chain, l2Chain } from '../config/chains'

const config = getDefaultConfig({
    appName: 'Ghozy Bridge',
    projectId: 'c4f79cc821944d9680842e34466bfb', // Demo project ID - get yours at cloud.walletconnect.com
    chains: [l1Chain, l2Chain],
    transports: {
        [l2Chain.id]: http(l2Chain.rpcUrls.default.http[0], {
            fetchOptions: {
                headers: {
                    "ngrok-skip-browser-warning": "true", // Bypass ngrok warning
                }
            }
        }),
        [l1Chain.id]: http()
    },
})

const queryClient = new QueryClient()

// Custom theme matching Ghozy design
const ghozyTheme = darkTheme({
    accentColor: '#ffffff',
    accentColorForeground: 'black',
    borderRadius: 'medium',
    fontStack: 'system',
})

export const WalletProvider = ({ children }) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={ghozyTheme} modalSize="compact">
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default WalletProvider
