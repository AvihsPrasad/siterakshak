// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Bannerblock from './components/Bannerblock'
import Footer from './components/footer'
import Header from './components/Header'
import About from './pages/about'
import Contact from './pages/contact'
import Service from './pages/service'
import Document from './pages/document'

const router = createBrowserRouter ([
  { path : "/", element: <Bannerblock />},
  { path : "/about-us", element: <About />},
  { path : "/service", element: <Service />},
  { path : "/contact", element: <Contact />},
  { path : "/documentation", element: <Document />},
])

function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <>
      <Header />
      {/* <Bannerblock /> */}
      <div><RouterProvider router={router} /></div>
      <Footer />
    </>
  )
}

export default App
