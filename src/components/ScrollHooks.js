import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  // UseEffect cada vez que se necesite renderizar este componente siempre se va a ejeceutar  todo lo que hay en esta funcion
  useEffect(() => {
    console.log("Moviendo el Scroll");

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
      console.log("Fase de Desmontaje");
    };
  }, [scrollY]);

  // Si se deja el segundo parametro como un array vacio , el useEffect solo se renderiza en la fase de montaje
  // Todo lo que se meta en el array del segundo parametro , quiere decir que se renderiza el effect el useEffect cada vez que esta variable cambie.
  useEffect(() => {
    console.log("Fase de montaje");
  }, []);

  // Buena practica no dejar los useEffect sin segundo parametro
  useEffect(() => {
    console.log("Fase de actualizacion");
  });

  // Para simular la fase de desmontaje retornamos una funcion
  useEffect(() => {
    return () => {
      console.log("Fase de Desmontaje");
    };
  });
  return (
    <>
      <h2>Hooks - useEffect y el ciclo</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}
