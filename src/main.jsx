import ReactDOM from 'react-dom/client'
import { Suspense } from 'react'
import CircularLoading from './components/loading/CircularLoading.jsx'

import { BrowserRouter as Router } from 'react-router-dom'

/* Using HashRouter instead of BrowserRouter to support GitHub Pages */
//import { HashRouter as Router } from 'react-router-dom'

import './i18n.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Suspense fallback={ <CircularLoading /> }>
      <App />
    </Suspense>
  </Router>   
)
