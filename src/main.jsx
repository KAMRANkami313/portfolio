import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { ThemeProvider } from './context/ThemeContext'
import { DevModeProvider } from './context/DevModeContext'
import { ToastProvider } from './context/ToastContext'
import { AchievementProvider } from './context/AchievementContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AchievementProvider>
        <ToastProvider>
          <DevModeProvider>
            <App />
          </DevModeProvider>
        </ToastProvider>
      </AchievementProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

// Load Vercel Analytics only in production (prevents script.js 404 on localhost)
if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  import('@vercel/analytics').then(({ inject }) => {
    inject();
  }).catch(() => {});
}
