import React from 'react';
import {Link} from 'react-router-dom';
import "../../assets/navbar.css";
import Inicio from "../../assets/IMAGENES/clubsanasana.png";

export default function index() {
    return(
       <div>
    <nav class="barra navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<Link className="navbar-brand" to='/Inicio'>
<img src={Inicio} alt="" width="70" height="54"/>
</Link>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <Link className="nav-link fw-bold" aria-current="page" to='/Usuarios'>Usuarios</Link>
    </li>
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle fw-bold" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to='/Categorias'>
        Categorias
      </Link>
      </li>
    <li className="nav-item">
      <Link className="nav-link fw-bold" to='/Informacion'>Informacion</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link fw-bold" to='/Contador'>Contador</Link>
    </li>
  </ul>
 </div>
 </div>
</nav>
     </div>
        )
    }
