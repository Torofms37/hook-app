import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const Layout = () => {

  const { counter, rest, sum } = useCounter(1);
  const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
    <>
      <h1>Información del Pikemon</h1>
      <hr />

      { isLoading 
        ? 
        <LoadingMessage /> 
        : (
          <PokemonCard 
            id={counter}
            name={data.name}
            sprites={[
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny,
            ]}
          />
          )
      }

      {/* <pre> {JSON.stringify(data, null, 2)} </pre> */}
      
      {/* <h2> {data?.name} </h2>
      Si tenemos 'data?', entonces busca en '.name' */}



      <button 
        className="btn btn-primary mt-2"
        onClick={ () => counter > 1 ? rest() : null }
        >
        Anteriores
      </button>

      <button 
        className="btn btn-primary mt-2"
        onClick={ () => sum() }
        >
        Siguiente
      </button>
    </>
  )
}
