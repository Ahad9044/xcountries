import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Flag from './Flag.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Flag />
  </StrictMode>,
)
