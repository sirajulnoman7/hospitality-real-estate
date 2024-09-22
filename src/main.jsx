import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import MainContext from './MainContext/MainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MainContext>
   <RouterProvider router={router}>

</RouterProvider>
   </MainContext>
  </StrictMode>,
)
