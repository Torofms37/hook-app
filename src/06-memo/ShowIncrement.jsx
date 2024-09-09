export const ShowIncrement = ({ increment }) => {

  console.log('me volví a poner de nuevo');
  

  return (
    <button
      className=" btn btn-primary "
      onClick={() => {
        increment( 5 );
      }}
    >
      Incrementar
    </button>
  );
};
