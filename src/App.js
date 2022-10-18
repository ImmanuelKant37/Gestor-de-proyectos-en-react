import React, { Component }  from 'react';
import Navbar from './components/Navbar';
import Items from './components/fetch/getItems';

import {ModalForm} from './components/ModalForm'
function Animaciones (){
  return( <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />)
} 
function App() {

  return (
    <>
    
  {Animaciones}
    <Navbar></Navbar>
    <ModalForm titulo ="Titulo"></ModalForm>
  <Items></Items>
    </>
  );
}

export default App;
