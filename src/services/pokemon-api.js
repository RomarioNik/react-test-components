export const fetchPokemon = async name => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`We didn't find pokemon ${name}`));
  });
};

const api = {
  fetchPokemon,
};

export default api;
