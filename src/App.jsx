import './App.css'
import Home from "./views/Landing"
import { Route, Routes } from 'react-router-dom'
import Spanish from "./views/Spanish"
import English from "./views/English"
import LandingAirport from './views/LandingAerop'
import SpanishAirport from './views/SpanishAirport'
import EnglishAirport from './views/EnglishAirport'
import QRGenerator from './views/QrAirport'


function App() {

  return (
    <div className=' bg-black w-screen'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spanish" element={<Spanish />} />
        <Route path="/english" element={<English />} />
        <Route path="/airport" element={<LandingAirport />} />
        <Route path="/spanishport" element={<SpanishAirport />} />
        <Route path="/englishport" element={<EnglishAirport />} />
        <Route path="/airportqr" element={<QRGenerator />} />
      </Routes>
    </div>
  )
}

export default App
