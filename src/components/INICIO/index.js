import React from 'react';
import "../../assets/inicio.css";
import Logo from '../../assets/IMAGENES/LogoFarmacia.jpg';
import Somos from '../../assets/IMAGENES/Quienes-Somos.png';

export default function index() {
    return(
        <div className="container" >
            <h2 className="Titulo fw-bold">Farmacia Sana Sana</h2>
        <div className="row col-12 pruebas ">
            <div className="col-6 contImg d-flex justify-content-center align-items-center" >
            <img classname="img-fluid" src={Logo} width="70%"  alt="" />
            </div>
            <div className="Somos col-6" >
            <h3> ¿Quienes somos? <br/>  <br/>  </h3>
            <img classname="img-fluid" src={Somos} width="100%" alt=""/>
            <p>
            <br/>
            Vision  
            <br/>
            Ser una empresa productiva de mayor nivel en el area de salud.
            <hr/>
            Mision
            <br/>
            Proveer a nuestros clientes una diversidad de productos y servicios a los precios mas competitivos del mercado.
            </p>
            </div>
        </div>
      
  </div>

        )
    }
