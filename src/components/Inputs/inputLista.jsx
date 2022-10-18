import React from 'react'

export default function InputLista (props) {
    return(
         <>
    <div class="input-group mb-3">
    <div className="row g-2">
        <div className="col-md">
  <label for="inputGroupSelect01">{props.value}</label>
  <select class="form-select" id="inputGroupSelect01">
        {props.lista.map((item, index) => {
            return(<>            
            <option value={index}>{item}</option>
        </>)})}
  
  </select>
  </div>
  </div>
</div>

  </>)
}