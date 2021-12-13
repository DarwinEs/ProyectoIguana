import React from 'react';
import "../../assets/contador.css";


export class Contador extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            initialState: 0,
            contador: 0
        };
        this.Sumar = this.Sumar.bind(this);
        this.Restar = this.Restar.bind(this);
        this.Resetear = this.Resetear.bind(this);
    }
        Sumar(){
            this.setState({contador: this.state.contador + 1})
        }

        Restar(){
            this.setState({contador: this.state.contador - 1})
        }

        Resetear(){
            this.setState({contador: 0})
        }


    render() {
        return (
            <div className="container contenedor mb-5 mt-5 col-6">
            <h2 className="text-center">{this.state.contador}</h2>
        <div className="row col">
            <div className="botones col-12 d-flex justify-content-center align-items-center">
                <button className="btn btn-warning Sumar" onClick={this.Sumar}>Sumar</button>
                <button className="btn btn-info Restar" onClick={this.Restar}>Restar</button>
                <button className="btn btn-danger Resetear" onClick={this.Resetear}>Resetear</button>
                </div>
            </div>
            </div>
        )
    }
}
