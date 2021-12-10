import React from 'react'
import {Link} from 'react-router-dom'
import "../../assets/navbar.css"

export default function index() {
    return(
       <div>
    <nav class="barra navbar navbar-expand-lg navbar-light">

<Link className="navbar-brand fw-bold" style={{color: "black"}} to='/'>Farmacia</Link>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav m-6">
    <li className="nav-item active">
      <Link className="nav-link fw-bold" style={{color: "black"}} to='/Inicio'>Inicio</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link fw-bold" style={{color: "black"}} to='/Usuarios'>Usuarios</Link>
    </li>
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle fw-bold" style={{color: "black"}} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to='/'>
        Categorias
      </Link>
      </li>
    <li className="nav-item">
      <Link className="nav-link fw-bold" style={{color: "black"}} to='/'>Informacion</Link>
    </li>
  </ul>
 </div>
</nav>
     </div>
        )
    }
