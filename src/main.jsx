import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './assets/sass/style.scss'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';

const queryClient= new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
