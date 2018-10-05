import React from 'react';
import { Link } from 'react-router-dom';

//function component
class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon();
  }

  render() {
    const pokemon = this.props.pokemon;
    const items = this.props.items;
    return(
      <div>
        <ul>
          <li>{pokemon.attack}</li>
          <li>{pokemon.defense}</li>
        </ul>
      </div>
    );
  }
}

export default PokemonIndexItem;
