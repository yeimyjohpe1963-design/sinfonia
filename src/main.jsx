import { createRoot } from 'react-dom/client'
import './styles/token.css'
import './styles/global.css'
import Inicio from './pages/Inicio/Inicio'
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LayoutPublico from './Layouts/LayoutPublico/LayoutPublico'
import Catalogo from './pages/Catalogo/Catalogo'
import { AuthProvider } from './context/AuthContext'
import DetalleAlbum from './pages/DetalleAlbum/DetalleAlbum'
import LayoutSesion from './Layouts/LayoutSesion/LayoutSesion'
import FormularioIngresar from './pages/FormularioIngresar/FormularioIngresar'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutPublico />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/albumes/:id" element={<DetalleAlbum />} />

          </Route>
          
          <Route element={<LayoutSesion />}>
            <Route path="ingresar" element={<FormularioIngresar />} />
          </Route>  
            
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)

