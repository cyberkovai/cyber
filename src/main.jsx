import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// இதை add பண்ணு
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'swiper/css'

import $ from "jquery";

window.$ = $
window.jQuery = $

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
