import { useCounter, useFetch } from "../hooks";
import { LoadingMessage, PokemonCard } from '../03-examples'

export const Layout = () => {

  const { counter, rest, sum } = useCounter(1);
  const {data, hasError, isLoading} = useFetch(`https://breakingbadapi.com/api/quotes/${ counter }`);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad quotes</h1>
      <hr />

    {
      isLoading ? <LoadingMessage /> : <Quote author={ author } quote={quote} />
    }



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
