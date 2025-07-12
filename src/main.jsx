import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import { RouterProvider } from "react-router";
import router from './router';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </StrictMode>,
)
