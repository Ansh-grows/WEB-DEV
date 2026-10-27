import { StrictMode , createContext} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
export let userContext = createContext(null)
let name = "ANSH"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <userContext.Provider value={name}>
      <App />
    </userContext.Provider> */}
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </StrictMode>
)
