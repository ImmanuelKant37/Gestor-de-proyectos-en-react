import {useEffect, useState } from 'react';
import React from 'react'
import Card from '../Card';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
const root = (document.getElementById('root'));
const myStyle = {
  display: 'grid',
  gridTemplateAreas: "'header' 'content' 'footer'",
  gridAutoRows: '170px',
  border: '5px solid black',
  gridTemplateColumns: '400fr 400fr 400fr 400fr 400fr 495fr',
  gridTemplateRows: '400fr 400fr',
  columnGap: '5px',
  rowGap:'4em',
  position: 'fixed',
};
function Items() {
  const [Titulo, setTitulo] = useState('')
  const [Codigo, setCodigo] = useState('')
  useEffect(() => {
    //const ur = 'https://serverbackendikant.herokuapp.com/api/login/'
    const url= 'https://serverbackendikant.herokuapp.com/api/get/buscarForm'
    const body = {
      "Codigo":-2
    } 
        fetch(url, {
        method: 'POST',
        body: JSON.stringify(body ),
      headers:{
        'Content-Type': 'application/json'
      }
      })
      .then(response =>  response.json())
      .then( response => {
       setTitulo( String(response.find.NombreForm))
       setCodigo( String(response.find.Codigo))
       
      }
      )
      .catch(error => console.error('Error:', error))
  }, [])
  return (<><div className="list-group list-group-flush" style={myStyle}> 
    <div >
    <Card 
    CarrouselID = {"carouselExampleControlsNoTouching"+String(Codigo)}
    Incidencia='Implentacion'
    Descripcion='Por desarrollar'
    Detalle='27/08/2022'
    Titulo={String(Titulo)}
    Activo='Inactivo'
    Porcentaje='0%'
    Costo='0$'
  ></Card>
  </div>
  </div></>
  )
}

export default Items