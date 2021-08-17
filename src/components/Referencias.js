import React, { useRef } from "react";

export default function Referencias() {
  /*
  Se usa en los casos en los que tengamos que manipular el Dom y no requerimos renderizar de nuevos el componente EJemplo (Menu hamburgeusa)
  cambios en el css, tampoco abusar del uso de las Referencias
  */
  let refMenu = useRef(),
    refMenuBtn = useRef();

  console.log(refMenu, refMenu);

  const handleToggleMenu = (e) => {
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2>Referencias</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      {/* comando emmet a*5{Sección $} + br */}
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="#">Sección 1</a>
        <br />
        <a href="#">Sección 2</a>
        <br />
        <a href="#">Sección 3</a>
        <br />
        <a href="#">Sección 4</a>
        <br />
        <a href="#">Sección 5</a>
      </nav>
    </>
  );
}
