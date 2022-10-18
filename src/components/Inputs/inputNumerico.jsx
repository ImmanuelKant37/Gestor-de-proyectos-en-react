import React from 'react'

export default function InputNumerico (props) {
    return(
         <>
    <div className="row g-2">
        <div className="col-md">
        <label for="floatingInputGrid">{String(props.value)}</label>
            <input type="number" className="form-control" id="floatingInputGrid" placeholder={String(props.value)} />
        </div>
        </div>
  </>)
}