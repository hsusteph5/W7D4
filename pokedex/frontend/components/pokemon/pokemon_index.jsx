import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    // debugger;

    //instead of writing this.props.pokemons
    //want the key on the top most thing
    const { pokemons, requestAllPokemon } = this.props;
    const allPokemon = pokemons.map(pokemon => (
      <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
    ));
    return (
      <div>
        <ul>
          { allPokemon }
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
