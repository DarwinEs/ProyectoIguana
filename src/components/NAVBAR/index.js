import React from 'react'
import "../../assets/navbar.css"

export default function index() {
    return(
            <div>
                <nav class="barra navbar navbar-expand-lg navbar-light">

<a class="navbar-brand fw-bold" style={{color: "black"}} href> Netflix</a>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link fw-bold" style={{color: "black"}} href>Servicios</a>
    </li>
    <li class="nav-item">
      <a class="nav-link fw-bold" style={{color: "black"}} href>Peliculas</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle fw-bold" style={{color: "black"}} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href>
        Categorias
      </a>
      </li>
    <li class="nav-item">
      <a class="nav-link disabled fw-bold" style={{color: "black"}} href>Informacion</a>
    </li>
  </ul>
 </div>
</nav>
  
 
            </div>
        )
    }
