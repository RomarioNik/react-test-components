import { Picture, List } from './PokemonDataView.styled';

export const PokemonDataView = ({ pokemon: { sprites, name, stats } }) => {
  return (
    <div>
      <Picture src={sprites.other['official-artwork'].front_default} alt={name} width="240" />
      <h2>{name}</h2>
      <List>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </List>
    </div>
  );
};
