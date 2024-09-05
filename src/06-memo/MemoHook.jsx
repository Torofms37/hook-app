import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( iterationNumber = 100 ) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Haber!!');
  }
  return ` ${iterationNumber} iteraciones realizadas `
}

export const MemoHook = () => {

  //Recuerda toro que para extraer un hook, debes poner primero el hook como función con(), puedes abre un const {} =, posteriorme agregar dentro del {} lo que se desea desestructurar. 
  const { counter, sum, rest   } = useCounter(0);
  const [show, setShow] = useState(true);

  //usememo se ejecuta cuando counter es cambiado unicamente él, mientras que otro no. esto sirve para memorizar una vez.
  const memorizedValue = useMemo( () => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{ counter }</small>
      </h1>
      <hr />

      <h4> { memorizedValue } </h4>

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
