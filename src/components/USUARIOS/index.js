import React from 'react';
import "../../assets/usuarios.css"

export default function index() {
  return (
      <div className="d-flex justify-content-center align-items-center col-12">
        <div className="TablaContenedor col-8">
            <table className="table table-bordered table-hover table-success table-striped m-2">
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Apellido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='col'>1</th>
                        <td>Daniel</td>
                        <td>Estrada</td>
                    </tr>
                    <tr>
                        <th scope='col'>2</th>
                        <td>Pablo</td>
                        <td>Sergio</td>
                    </tr>
                    <tr>
                        <th scope='col'>3</th>
                        <td>Prueba</td>
                        <td>Prueba2</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
  );
}
