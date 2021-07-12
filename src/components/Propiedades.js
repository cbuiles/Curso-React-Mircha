import React from "react";
// Importar la dependencia para tipar las propiedades
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    // Tipos de propiedades que puede ser importadas
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>
          Nombre: {props.objeto.nombre}: Correo: {props.objeto.correo}
        </li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

// Tipar para las propiedades esperadas
Propiedades.propTypes = {
  numero: PropTypes.number,
};
