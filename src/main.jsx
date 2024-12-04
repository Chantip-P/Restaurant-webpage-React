import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'  // Change this line
import './index.css'
import Homepage from './components/Homepage.jsx'
import Aboutpage from './components/AboutPage.jsx'
import TabbedMenu from './components/TabbedMenu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="menu" element={<TabbedMenu />} />
      </Routes>
    </Router>
  </StrictMode>,
)
