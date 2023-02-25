import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../../App';

  export function crearDocumento(bodyParam)
  {
    const url= 'https://plantilla-backend-mern.vercel.app/api/post/crearDocumento'
    const body = bodyParam
    fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers:{
    'Content-Type': 'application/json'
  }
  })
  .then(response =>  
    {const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

} 
)
} 