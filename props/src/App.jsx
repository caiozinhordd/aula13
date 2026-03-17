import Home from './src/views/Home'
import './App.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  

  return (
    <>
      <Home />
    </>
  )
}

export default App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
