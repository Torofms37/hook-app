import { useCounter } from "./hooks/useCounter";

export const CounterWithCustomHook = () => {

  const { counter, rest, sum, equal } = useCounter();

  return (
    <>
      <h1>Counter with: {counter} </h1>
      <br />
      <button className="btn btn-primary" onClick={() => sum(2)}>+2</button>
      <button className="btn btn-primary" onClick={equal}>Reset</button>
      <button className="btn btn-primary" onClick={() => rest(2)}>-1</button>
    </>
  );
};
