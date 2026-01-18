import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Header from './components/layouts/header'
import AppRoutes from './AppRoutes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)