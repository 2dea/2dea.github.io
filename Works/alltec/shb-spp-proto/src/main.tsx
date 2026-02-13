import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import '/src/assets/style/typo.css';
import '/src/assets/style/public.scss';
import '/src/pages/spp/resource/system.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
