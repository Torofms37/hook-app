import { memo } from "react";

//al importar memo y ponemos despues de =, estos se deben encerrar en parentesis, lo que hará que se efectue.
export const Small = memo(({value}) => {

  console.log('Qiuhobo');
  

  return (
    <small> { value } </small>
  )
})
