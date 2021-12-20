import React, { Component } from 'react'

export default class Estado extends Component {
    constructor(props){
        super(props);
        this.state ={
            contador: 0,
            initialState: 0,
        };

        // setInterval(() => {
        //     this.setState({contador: this.state.contador + 1})
        // }, 1000);
    }
    
  render() {
    return (
      <>
        <h3>Soy el estado</h3>
        <h3>{this.state.contador}</h3>
      </>
    )
  }
}

