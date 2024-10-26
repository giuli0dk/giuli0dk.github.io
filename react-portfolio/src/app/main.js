
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
import './globals.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>developedbydk</h1>
    <App />
  </StrictMode>,
)