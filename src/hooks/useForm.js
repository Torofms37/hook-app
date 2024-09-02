import { useState } from "react";


export const useForm = ( initialForm = {} ) => {

  const [ formState, setFormState ] = useState( initialForm )


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

  const onResetForm = () => {
    setFormState( initialForm )
  };
  
  return {
    ...formState,
    formState,
    onInputChange,
    setFormState,
    onResetForm,
  }

}
