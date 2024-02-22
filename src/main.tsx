import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import './index.css'

const rootElement = ReactDOM.createRoot(
  document.getElementById('root') as Element
)

rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
