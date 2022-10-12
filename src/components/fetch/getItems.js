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
  const [Forms, setForms] = useState([])
  const [Codigo, setCodigo] = useState('')
  useEffect(() => {
    const url= 'https://serverbackendikant.herokuapp.com/api/get/buscarPorCategoria'
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
      setForms(response.form)
      console.log(response.form)
      }
      )
      .catch(error => console.error('Error:', error))
  }, [])
  return (<><div className="list-group list-group-flush" style={myStyle}> 
    <div >{() => {Forms.map(items => {<ul>{items.Titulo}</ul>}) }}
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