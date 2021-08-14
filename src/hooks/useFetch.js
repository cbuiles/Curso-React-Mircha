import { useState, useEffect } from "react";

// Tiene que empezar el nombre con use para que react sepa que es un Hook personalizado
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //  Queremso que se ejecute solamente cuando cambie la url
  useEffect(() => {
    const getData = async (url) => {
      // Validacion de la peticion
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
        }

        let data = await res.json();

        // Actualizamos las variables del Hook a retornar
        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};
