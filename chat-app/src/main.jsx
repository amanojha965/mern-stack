import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //is strict mode ki wjh se js do times run hoti h 
  <StrictMode>
    <App />
  </StrictMode>,
)
