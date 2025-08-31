import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Stairs>
    <App />
    </Stairs>
    </BrowserRouter>
)
