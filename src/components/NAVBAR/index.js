import React from 'react'
import {Link} from 'react-router-dom'
import "../../assets/navbar.css"
import Inicio from "../../assets/IMAGENES/clubsanasana.png"

export default function index() {
    return(
       <div>
    <nav class="barra navbar navbar-expand-lg navbar-light">

<Link className="navbar-brand fw-bold" to='/Inicio'>
<img src={Inicio} alt="" width="70" height="54"/>
</Link>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav m-6">
    <li className="nav-item">
      <Link className="nav-link" style={{color: "black"}} to='/Usuarios'>Usuarios</Link>
    </li>
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" style={{color: "black"}} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to='/Categorias'>
        Categorias
      </Link>
      </li>
    <li className="nav-item">
      <Link className="nav-link" style={{color: "black"}} to='/Informacion'>Informacion</Link>
    </li>
  </ul>
 </div>
</nav>
     </div>
        )
    }
