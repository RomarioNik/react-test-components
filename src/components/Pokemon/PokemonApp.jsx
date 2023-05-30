import { useState } from 'react';
import { PokemonForm } from './PokemonForm';
import { PokemonInfo } from './PokemonInfo';
import { Wrapper } from './PokemonApp.styled';

export const PokemonApp = () => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <Wrapper>
      <PokemonForm onHandleFormSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
    </Wrapper>
  );
};
