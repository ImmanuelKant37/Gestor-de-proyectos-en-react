import React, { Component } from 'react';
import Carrousel from './Carrousel';
const styleCarrousel = {
     width:'15em',
     heighy:'10em',
    paddingTop: '5em',
    paddingLeft: '0em',
    listStyle: 'none',
    
  };
  const styleCard = {
    paddingLeft: '1em',
    listStyle: 'none',
       
  };

  const Fondo = {

    position:'absolute',
 
  }
  const color = {
    width : '15em',
    background: 'linear-gradient(90deg, rgba(249,248,255,1) 0%, rgba(210,210,223,1) 48%, rgba(255,255,255,1) 100%)',
  }

function Card(props)  {
    {
        return (
             <div >
            <div style={styleCard} className="card-body ">
            <div style={styleCarrousel}>
      <Carrousel  CarrouselID = {String(props.CarrouselID)} Incidencia = {props.Incidencia} Activo={props.Activo} Porcentaje = {props.Porcentaje} Costo = {props.Costo}></Carrousel>
      </div>
                <div className="row row-cols-1 row-cols-md-5 g-2 " >
  <div className="col " style={Fondo}>
    <div className="card h-100 " style={color}>
      {/*<img src="..." className="card-img-top" alt="...">*/}
      <div className="card-body">
        <h5 className="card-title">{props.Titulo}</h5>
        <p className="card-text">{props.Descripcion}</p>
      </div>
        <div className="card-footer">
            <small className="text-muted">{props.Detalle}</small>
        </div>
       </div>
    </div> 
  </div>  </div> </div>
        );
    }
}

export default Card;