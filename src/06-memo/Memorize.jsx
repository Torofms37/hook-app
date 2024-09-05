import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {

  //Recuerda toro que para extraer un hook, debes poner primero el hook como función con(), puedes abre un const {} =, posteriorme agregar dentro del {} lo que se desea desestructurar. 
  const { counter, sum, rest   } = useCounter(0);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={() => rest()}>
        -1
      </button>
      <button className="btn btn-primary" onClick={() => sum()}>
        +1
      </button>
      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Show/Hide { JSON.stringify(show) }
      </button>
    </>
  );
};
