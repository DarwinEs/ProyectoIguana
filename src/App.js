import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/NAVBAR/index'
import Inicio from'./components/INICIO/index'
import Footer from './components/FOOTER/index'
import Usuarios from './components/USUARIOS/index'
import Error from './components/Error'
import Home from './components/Home'
import Info from './components/INFORMACION/index'
import Categorias from './components/CATEGORIAS/index'
import {Contador} from './components/Prueba/index'
import "../src/assets/estilo.css"


export default function App () {
return (
    <div>
    <Router>
        <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/Inicio' element={<Inicio/>}/>
                <Route exact path='/Usuarios' element={<Usuarios/>}/>
                <Route exact path='*' element={<Error/>}/>
                <Route exact path='/Categorias' element={<Categorias/>}/>
                <Route exact path='/Informacion' element={<Info/>}/>
                <Route exact path='/Contador' element={<Contador/>}/>


            </Routes>  
        <Footer/>      
    </Router>

    </div>
    )    
}

