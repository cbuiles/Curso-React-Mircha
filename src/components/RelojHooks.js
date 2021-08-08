import React, { useState, useEffect } from "react";

function Reloj({ hora }) {
  return (
    <>
      <h3>{hora}</h3>
    </>
  );
}

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;
    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }

    return () => {
      console.log("Fase de Desmontaje");
      clearInterval(temporizador);
    };
  }, [visible]);

  const tictac = (valor) => setVisible(valor);

  return (
    <>
      <h2>Reloj con Hooks</h2>
      {/* Operador Cortocircuito para renderizar el componente */}
      {visible && <Reloj hora={hora} />}
      {/* Como va a recibir un parametro mas , adicional del evento creamos la arrow funcion dentro del evento click */}
      <button onClick={() => tictac(true)}>Iniciar</button>
      <button onClick={() => tictac(false)}>Detener</button>
    </>
  );
}
