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
  columnGap: '10px',
  rowGap:'4em',
  position: 'fixed',
};
function Items() {
  const [Forms, setForms] = useState([])
  const [Codigo, setCodigo] = useState('')
  useEffect(() => {
    const url= 'https://serverbackendikant.herokuapp.com/api/get/buscarPorCategoria'
    const body = {
      "Categoria":"Desarrollo",
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
   
  {Forms.map(item => 
    {return(<Card
      CarrouselID = {"carouselExampleControlsNoTouching"+String(item.Codigo)}
      Incidencia={item.Categoria} /* CATEGORIA */
      Descripcion={item.Descripcion} /* DESCRIPCION */
      Detalle={item.createdAt} /* FECHA */
      Titulo={item.Titulo} /* TITULO */
      Activo={item.Activo} /* ESTADO */
      Porcentaje={String(item.Porcentaje)}  /* ITEMS PORCENTAJE */
      Costo={String(item.Costo)}      /* ITEMS PORCENTAJE */
    
    ></Card>)})}
  </div></>
  )
}

export default Items