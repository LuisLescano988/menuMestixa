import './App.css'
import Home from "./views/Landing"
import { Route, Routes } from 'react-router-dom'
import Spanish from "./views/Spanish"
import English from "./views/English"


function App() {

  return (
    <div className=' bg-black'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spanish" element={<Spanish />} />
        <Route path="/english" element={<English />} />
      </Routes>
    </div>
  )
}

export default App
