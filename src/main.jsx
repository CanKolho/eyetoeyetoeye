import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme.js'
import { Suspense } from 'react'
import CircularLoading from './components/loading/CircularLoading.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

/* Using HashRouter instead of BrowserRouter to support GitHub Pages */
//import { HashRouter as Router } from 'react-router-dom'

import './i18n.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename='eyetoeyetoeye'>
    <Suspense fallback={ <CircularLoading /> }>
      <ThemeProvider theme={ theme }>
        <App />
      </ThemeProvider>
    </Suspense>
  </Router>   
)
