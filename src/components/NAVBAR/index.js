import React from 'react'
import "../../assets/navbar.css"

export default function index() {
    return(
            <div>
                <nav class="barra navbar navbar-expand-lg navbar-light">

<a className="navbar-brand fw-bold" style={{color: "black"}} href> Farmacia Sana Sana</a>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a className="nav-link fw-bold" style={{color: "black"}} href>Servicios</a>
    </li>
    <li className="nav-item">
      <a className="nav-link fw-bold" style={{color: "black"}} href>Peliculas</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle fw-bold" style={{color: "black"}} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href>
        Categorias
      </a>
      </li>
    <li className="nav-item">
      <a className="nav-link fw-bold" style={{color: "black"}} href>Informacion</a>
    </li>
  </ul>
 </div>
</nav>
              </div>
        )
    }
