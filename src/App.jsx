import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Instructions from './components/Instrunctions'
import ContactForm from './components/contactForm'
import '@fontsource/roboto/300.css';

const App = () => {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  )
}

export default App
