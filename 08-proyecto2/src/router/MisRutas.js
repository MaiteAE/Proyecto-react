import React from 'react'
import { Routes, Route, BrowserRouter,  Navigate } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { Curriculum } from '../components/Curriculum';
import { Servicios } from '../components/Servicios';
import { Portafolio } from '../components/Portafolio';
import { Contacto } from '../components/Contacto';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* header y navegacion*/}
      <HeaderNav />
      {/* Contenido central*/}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to= "/inicio" />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </section>
      {/* footer*/}
      <Footer />
    </BrowserRouter>
  )
}
