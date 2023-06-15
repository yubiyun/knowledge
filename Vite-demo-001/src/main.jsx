import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import X from './a.md'
console.log(X)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <X />
  </React.StrictMode>,
)
