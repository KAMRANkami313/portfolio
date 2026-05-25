import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { ThemeProvider } from './context/ThemeContext'
import { DevModeProvider } from './context/DevModeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <DevModeProvider>
        <App />
      </DevModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
)