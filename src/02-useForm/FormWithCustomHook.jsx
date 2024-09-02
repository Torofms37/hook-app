import { useEffect } from "react";
import { useForm } from "../01-useState/hooks/useForm";

export const FromWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });



  useEffect(() => {
    // console.log('formstate called');
    // cuando se agrega [] significa que el useEffect unicamente se ejecuta una vez, en este caso, el log muestra una vez, aunque se cambie el valor ya no se vuelve a mandar el useEffect.
  }, [formState]);
  // en este caso, se quiere que unicamente se ejecute cuando el firmState se ejecute

  useEffect(() => {
    // console.log('email es llamado');
  }, [username]);

  useEffect(() => {
    // console.log('email es llamado');
  }, [email]);

  useEffect(() => {
    // console.log('email es llamado');
  }, [password]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="sername"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="torofms37@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Reset
      </button>
    </>
  );
};
