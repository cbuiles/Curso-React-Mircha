import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // Declaron una propiedad this.sumar, lo que hace es igualar al metodo dumar que tiene y enlazar el elemento this
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("sumando");
    // Toca Bindear este this , ya que aparece como undefined, por el contexto solo en los corchetes
    console.log(this);

    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          {/* Sin parentesis para el metodo pq esto genera su invocacion inmediata */}
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  // Vamos a definir los metodos dentro de las clases con las arrow functions, se puede omitir el "let" y "const" debido que esta dentro de una clase y las arrow funciont heredan el this del contexto en el que se encuentran y no se necesita hacer el bind
  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          {/* Sin parentesis para el metodo pq esto genera su invocacion inmediata */}
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}
