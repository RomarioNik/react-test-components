import { PokemonDataView } from '../PokemonDataView';
import { Wrapper, Loading, SpinerIcon, PokemonName } from './PokemonPendingView.styled';
import pendingImage from '../../../images//pokemon-questions.jpg';

export const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: '',
    sprites: {
      other: {
        'official-artwork': { front_default: pendingImage },
      },
    },
    stats: [],
  };

  return (
    <Wrapper role="alert">
      <Loading>
        <SpinerIcon />
        <span>Loading...</span>
      </Loading>
      <PokemonDataView pokemon={pokemon} />
      <PokemonName>{pokemonName}</PokemonName>
    </Wrapper>
  );
};
