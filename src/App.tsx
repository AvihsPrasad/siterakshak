// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Bannerblock from './components/Bannerblock'
import Footer from './components/footer'
import Header from './components/Header'
import About from './pages/about'
import Service from './pages/service'
import Contact from './pages/contact'
import Document from './pages/document'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Bannerblock />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documentation" element={<Document />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
