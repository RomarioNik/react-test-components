import { useState, useEffect } from 'react';
import { PokemonDataView } from '../PokemonDataView';
import { PokemonErrorView } from '../PokemonErrorView';
import { PokemonPendingView } from '../PokemonPendingView';
import pokemonAPI from '../../../services/pokemon-api';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    if (pokemonName === '') {
      return;
    }

    setStatus(STATUS.PENDING);
    pokemonAPI
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(STATUS.REJECTED);
      });
  }, [pokemonName]);

  if (status === STATUS.IDLE) {
    return <h1>Enter pokemon name</h1>;
  }

  if (status === STATUS.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === STATUS.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === STATUS.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
};
