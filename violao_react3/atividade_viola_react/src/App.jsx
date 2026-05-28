import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import QuemSomos from './componentes/QuemSomos'
import Instrumentos from './componentes/Instrumentos'
import Endereco from './componentes/Endereco'
import Contato from './componentes/Contato'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/QuemSomos" element={<QuemSomos />} />
          <Route path="/Instrumentos" element={<Instrumentos />} />
          <Route path="/Endereco" element={<Endereco />} />
          <Route path="/Contato" element={<Contato />} />
          
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App