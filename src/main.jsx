import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import StarRating from './star'

createRoot(document.getElementById('root')).render(
    <App />
    // <StarRating maxRating={5}/>
)
