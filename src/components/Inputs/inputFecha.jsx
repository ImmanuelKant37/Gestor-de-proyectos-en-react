import React from 'react'
let valueDate = new Date()

export function InputFecha (props) {
    return(
         <>
    <div className="row g-2">
        <div className="col-md">
        <label for={"Input"+String(props.value)}>{String(props.value)} </label>
            <input
             type="date" 
             className="form-control" 
             id={"Input"+String(props.value)}
             placeholder={String(props.value)} 
             
             onChange={
                ()=> 
               
                valueDate= (document.getElementById("Input"+String(props.value)).valueAsDate)
            }/>
                </div>
        </div>
  </>
  )
}
export const getInputValueAsDate = (val) =>  {return document.getElementById("Input"+String(val)).value}
