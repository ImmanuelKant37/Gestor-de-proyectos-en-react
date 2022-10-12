import React, { PureComponent } from 'react'
import Header from './header'
import OffCanvas from './OffCanvas'
const styleOffCanvas = {
  paddingRight: '84%'
};
export default class Navbar extends PureComponent {
  render() {
    return (
      <>
      <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand" href="#"><Header/></div><div style={styleOffCanvas}><OffCanvas/></div><div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon"></span>
        </button></div>
        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Configuracion</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Soporte</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Ayuda
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Contacto</a></li>
                  <li><a className="dropdown-item" href="#">Direccion</a></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><a className="dropdown-item" href="#">Correo</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar.." aria-label="Search"/>
              <button className="btn btn-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    </div></>
    )
  }
}
