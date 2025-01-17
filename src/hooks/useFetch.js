import { useState, useEffect } from "react";

const localCache = {};

export const useFetch = ( url ) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  //llamrse de nuevi
  useEffect(() => {

    getFetch();

  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    })
  }

  const getFetch = async() => {

    if( localCache[url]) {
      console.log('Usando caché');
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      })
      return;
    }

    setLoadingState();

    const response = await fetch( url );

    await new Promise( e => setTimeout(e, 1500) );

    if(!response.ok) {
      setState({
        data:null,
        isLoading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText,
        }
      });
      return;
    }

    const data = await response.json();

    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    })

    //manejo del cache
    localCache[url] = data;
    
  }
  
  return { 
    data: state.data ,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
