import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home' >

      <h1>
        Hola, soy <strong>Cybercat</strong>, soy <strong>desarrollador</strong> Web Frontend, con base en Tarragona y
        ofrezco mis servicios de <strong>programación </strong> y desarrollo en todo tipo de proyectos web.
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y relevancia en internet.
        <Link to="/contacto"> Contacta conmigo.</Link> 
      </h2>

      <section className="last-works" >
        <h2>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollador web.</p>
        <div className='works'>

        </div>

      </section  >

    </div>
  )
}
