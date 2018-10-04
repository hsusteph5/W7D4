const selectAllPokemon = (state) => {
  let pokemon = state.entities.pokemon;
  return (_.values(pokemon));
};

export default selectAllPokemon;
