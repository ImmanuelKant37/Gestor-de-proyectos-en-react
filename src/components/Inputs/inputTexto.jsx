import React from 'react'
let valueString =''
export function InputTexto (props) {   
    return(
         <>
    <div className="row g-2">
        <div className="col-md">
        <label for={"Input"+String(props.value)}>{String(props.value)}</label>
            <input type="text" className="form-control" 
            id={"Input"+String(props.value)} 
            placeholder={String(props.value)}
            onChange={
                ()=> 
            valueString = document.getElementById("Input"+String(props.value)).value}/>
        </div>
        </div> </>)}
 
export const getInputValueAsString = (val) =>  {return document.getElementById("Input"+String(val)).value}
