import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WalletProvider from './components/WalletProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Bridge from './components/Bridge'
import Footer from './components/Footer'
import Docs from './pages/Docs'
import Leaderboard from './pages/Leaderboard'

// Home page with all sections
const Home = () => (
  <>
    <Hero />
    <Stats />
    <Features />
  </>
)

// Standalone Bridge page
const BridgePage = () => (
  <>
    <Bridge />
  </>
)

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bridge" element={<BridgePage />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/docs/:slug" element={<Docs />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </WalletProvider>
  )
}

export default App
