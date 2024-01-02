import { useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Instructions from './components/Instrunctions'
import ContactForm from './components/ContactForm'
import { useScrollToTop } from "./hooks/index"
import { useTranslation } from 'react-i18next';
import '@fontsource/roboto/300.css';


const App = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  
  useScrollToTop();

  useEffect(() => {
    // Redirect all requests to "/" to "/:lang"
    if (window.location.pathname === "/") {
      navigate(`/${i18n.language}`);
    }
  }, [i18n.language, navigate]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/:lang" element={<Home />} />
        <Route path='/:lang/about' element={<About />} />
        <Route path='/:lang/instructions' element={<Instructions />} />
        <Route path='/:lang/contact' element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App
