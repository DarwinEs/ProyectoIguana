import React, { Component } from 'react'


function Login(){
    return (
        <div>
            <h4>Login</h4>
        </div>
    )
}

function Logout(){
    return (
        <div>
            <h4>Logout</h4>
        </div>
    )
}

export default class RenderizadoCondicional extends Component {
    constructor(props){
        super(props);
        this.state = {
            session: true,
        }
    }

  render() {
    return (
      <div>
        <h2>Renderizado Condicional</h2>
        <h3>{this.state.session? <Login/> : <Logout/>}</h3>
      </div>
    )
  }
}
