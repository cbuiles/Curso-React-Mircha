import React from "react";

// Crecion por medio de funcional
// Funcion expresada
const Componente = (props) => <h2>{props.msg}</h2>;
// ===========================================================
// Funcion no declarada
// function Componente(props) {
//   return <h2>{props.msg}</h2>;
// }

// ==================================================================================
//Creacion de componentes por medio de clases
// class Componente extends Component {
//Por defecto debe tener su metodo render
//   render() {
//     return <h2>{this.props.msg}</h2>;
//   }
// }

export default Componente;
