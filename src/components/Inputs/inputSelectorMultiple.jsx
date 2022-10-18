import React from 'react'

export default function InputSelectorMultiple (props) {
    return(
         <>
  
        <div className="col-md">
       
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {props.value}
  </button>

  <div className="dropdown" id="inputGroupSelect01">
  
  <div className='dropdown-menu'>
   
        {props.lista.map((item, index) => {
            return(<>   
            <option value={index} className='dropdown-item'>
            <div className="form-check form-check-inline ">
            <label className="form-check-label" for={"inlineRadio"+String(index)}>{item}</label>
             <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id={"inlineRadio"+String(index)}></input>            
            </div>
            </option>
            
        </>)})}
        </div>
  </div>
  </div>


  </>)
}