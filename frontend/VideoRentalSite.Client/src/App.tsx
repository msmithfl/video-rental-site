import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import RentalLibrary from './pages/RentalLibrary'
import About from './pages/About'
import Digitization from './pages/Digitization'
import HomeStreaming from './pages/HomeStreaming'
import MovieDetails from './pages/MovieDetails'
import './App.css'

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      <div className={isHomePage ? '' : 'flex-1'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<RentalLibrary />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/digitization" element={<Digitization />} />
          <Route path="/services/home-streaming" element={<HomeStreaming />} />
        </Routes>
      </div>
      {!isHomePage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
