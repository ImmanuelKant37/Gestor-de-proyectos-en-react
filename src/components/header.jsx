import React from 'react'
import Card from './Card'
import { Component } from 'react'
class newCard extends Component {
  render(){return (
    <>
      <div>
        <Card 
        Incidencia='Implentacion'
        Titulo='Gestor personal' 
        Descripcion='Por desarrollar'
        Detalle='27/08/2022'
        Activo='Inactivo'
        Porcentaje='0%'
        Costo='0$'
         /></div></>
  )}
}
function Header() {
  return (
    <><div>
        <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Menu <></> 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4-week" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
  <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
</svg>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" 
    onClick={
      ()=>{{ 
        document.body.inner(
          <newCard/>


        )}}}>
        Nuevo documento</a></li>
    <li><a className="dropdown-item" href="#">Cargar documento</a></li>
    <li><a className="dropdown-item" href="#">Buscar documento</a></li>
  </ul>
</div>
        </div></>
  )
}

export default Header