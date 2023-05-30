import { Wrapper, Picture } from './PokemonErrorView.styled';
import defaultImage from '../../../images/error-pikachu.png';

export const PokemonErrorView = ({ message }) => {
  return (
    <Wrapper role="alert">
      <Picture src={defaultImage} width="240" alt="Sad pokemon" />
      {message}
    </Wrapper>
  );
};
