import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// createRoot è un metodo di React che sulla base di un contenitore HTML 
// crea una "root", ovvero una base di parteza per il nostro progetto
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
