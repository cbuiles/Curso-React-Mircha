import React, { Component } from "react";

class Reloj extends Component {
  componentWillUnmount() {
    // console.log(3, "El componente ha sido eliminado del DOM");
  }

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    // console.log(0, "El componente se inicializa, aun NO esta en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    // Cuando se realizan peticios ajax se recomienda hacerlo en este ciclo de vida, ya que es con el que podemos interactuar en el DOM, significa que este componente ya esta cargado en el DOM
    // console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    // Me permite pasar las propiedades previas y el estado previo por si necesito trabjar con ellas en el nuevo estado
    // console.log(2, "El estado o las props del componente han cambiado");
    // console.log(prevProps);
    // console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };
  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    // console.log(4,"El componente se dibuja (o redibuja por algun cambo) en el DOM");
    return (
      <>
        <h2>Ciclo de vida de los Componentes de Clase</h2>
        {/* Operador de cortocircuito para reemplazar el if */}
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    );
  }
}
