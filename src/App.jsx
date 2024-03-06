import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Hero/Header'
import Hero from './Components/Hero/Hero'
import Companies from './Components/Companies/Companies'
import Residences from './Components/Residences/Residences'
import Value from './Components/Value/Value'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='App'>
      <div className='white-bg' />
      <Header />
      <Hero />
      <Companies />
      <Residences />
      <Value />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
