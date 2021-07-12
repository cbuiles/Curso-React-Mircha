import React, { Component } from "react";

// Los componentes funcionales de antes no pueden tener estados, solo aprartir de los Hooks 16.8
function EstadoAHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // setInterval(() => {
    // Forma correcta de actualizar el estado de lso componentes
    // this.setState({
    //   contador: this.state.contador + 1,
    // });
    // }, 1000);
  }
  render() {
    return (
      <div>
        <h2>El State</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador} />
      </div>
    );
  }
}
