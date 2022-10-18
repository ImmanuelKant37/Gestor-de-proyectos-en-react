import React from 'react'

export default function InputBoolean(props) {
    return(
         <>
         <hr></hr>
       <div className="col-4">
    <div className="form-check form-check-inline ">
            <label className="form-check-label" for={"inlineRadioBtn"+String(props.value)}>{String(props.value)}</label>
            <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id={"inlineRadioBtn"+String(String(props.value))}></input>            
    </div>
    </div>
     </>)
}