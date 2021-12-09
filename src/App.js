import React from "react"
import Navbar from './components/NAVBAR/index'
import Inicio from'./components/INICIO/index'
import Footer from './components/FOOTER/index'
import Usuarios from './components/USUARIOS/index'
import "../src/assets/estilo.css"

export default function App () {
return (
    <div>
        <Navbar/>
        <Inicio/>
        <Usuarios/>
        <Footer/>
    </div>
    )    
}

