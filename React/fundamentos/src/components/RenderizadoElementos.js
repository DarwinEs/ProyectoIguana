import React, { Component } from 'react'

export default class RenderizadoElementos extends Component {
    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primevera", "Verano", "Otoño", "Invierno"]
        }
    }
  render() {
    return (
      <div>
        <h3>Renderizado de Elementos</h3>
        <h4>Estaciones del año</h4>
        <ol>
            {this.state.seasons.map((el) => (
                <li key={el}>{el}</li>
            ))
            }
        </ol>
      </div>
    )
  }
}
