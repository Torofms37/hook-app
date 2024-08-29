import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Bokus',
    email: 'toro,@gmail.com',
  })

  const { username, email } = formState;

  //en este componente llega el parametro target, el cual comprende desde el target el
  const onInputChange = ({target}) => {
    //el name y value, mejor dicho los destrcutura para ser utulizados
    const { name, value } = target;
    //en esta función se añade todo lo del formstate y lo que haya en el valor se adjunta al name, el cual luego es mostrado en las propiedadesde de abajo
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  useEffect(() => {
    
    return () => {
      console.log(email, 'recibií email');
      console.log(formState, 'recibir un formState');
      
    }
  }, [email, formState])
  

  useEffect( () => {
    console.log('useEffect es llamado');
  }, []);

  useEffect( () => {
    console.log('formstate called');
  // cuando se agrega [] significa que el useEffect unicamente se ejecuta una vez, en este caso, el log muestra una vez, aunque se cambie el valor ya no se vuelve a mandar el useEffect.
  }, [formState]);
  // en este caso, se quiere que unicamente se ejecute cuando el firmState se ejecute

  useEffect( () => {
    console.log('email es llamado');
  }, [ email]);



  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={ onInputChange }
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="torofms37@gmail.com"
        name="email"
        value={email}
        onChange={ onInputChange }
      />
    </>
  );
};
