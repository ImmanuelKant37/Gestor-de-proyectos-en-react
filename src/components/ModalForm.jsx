import React from 'react'
import {InputTexto, getInputValueAsString} from './Inputs/inputTexto'
import InputNumerico from './Inputs/inputNumerico'
import {InputFecha, getInputValueAsDate, setValueToNow} from './Inputs/inputFecha'
import InputLista from './Inputs/inputLista'
import InputSelectorMultiple from './Inputs/inputSelectorMultiple'
import InputBoolean from './Inputs/inputBoolean'
import { crearDocumento } from './functions/crearDocumento'
const body = ''
export const ModalForm = (props) => {
    
    return(
        <> <div  className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="900">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">{props.titulo || "Form"}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                     <InputTexto value="Titulo" id="CheckToCheck"></InputTexto>
                     <InputNumerico value='Numero'></InputNumerico>
                     <InputFecha value="Fecha"></InputFecha>
                     <InputLista value="Items" lista ={["Primer item","Segundo item","Tercero..."]}></InputLista>
                     <InputSelectorMultiple value="Lista" lista ={["Primer item check","Segundo item check","Tercero check..."]}></InputSelectorMultiple>
                     <InputBoolean value="Target"></InputBoolean>
                    </div>
                    <div className="modal-footer">
                        <button 
                        className="btn btn-primary" 
                        data-bs-target="#exampleModalToggle" 
                        data-bs-toggle="modal" 
                        onClick={()=>console.log(getInputValueAsDate("Fecha"))}>Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
   
}