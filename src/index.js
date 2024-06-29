import './index.css'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="bg-[#f87171] md:p-6 h-screen">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
reportWebVitals()
