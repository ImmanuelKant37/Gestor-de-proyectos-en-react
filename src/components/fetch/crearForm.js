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
    const url= 'plantilla-backend-mern.vercel.app/api/get/crearForm'
    const body = {
      "Categoria":"Card",
      "Limite":30
    } 
        fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
      headers:{
        'Content-Type': 'application/json'
      }
      })
      .then(response =>  response.json())
      .then( response => {/*
       setTitulo( String(response.find.NombreForm))
       setCodigo( String(response.find.Codigo))
       */
      console.log(response)
      }
      )
      .catch(error => console.error('Error:', error))
  }, [])
  return (<><div className="list-group list-group-flush" style={myStyle}> 
    <div >
    <Card 
    CarrouselID = {"carouselExampleControlsNoTouching"+String("Codigo")}
    Incidencia='Implentacion' /* CATEGORIA */
    Descripcion='Por desarrollar' /* DESCRIPCION */
    Detalle='27/08/2022' /* FECHA */
    Titulo={String("Titulo")} /* TITULO */
    Activo='Inactivo' /* ESTADO */
    Porcentaje='0%'  /* ITEMS PORCENTAJE */
    Costo='0$'      /* ITEMS PORCENTAJE */
  ></Card>
  </div>
  </div></>
  )
}

export default Items