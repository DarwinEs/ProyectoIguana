import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/NAVBAR/index'
import Inicio from'./components/INICIO/index'
import Footer from './components/FOOTER/index'
import Usuarios from './components/USUARIOS/index'
import Error from './components/Error'
import Home from './components/Home'
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
            </Routes>  
        <Footer/>      
    </Router>

    </div>
    )    
}

