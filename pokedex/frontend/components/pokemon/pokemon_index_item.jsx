import React from 'react';
import { Link } from 'react-router-dom';

//function component
class PokemonIndexItem extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    const id = this.props.pokemon.id;
    return(
      <li>
        <Link to={`/pokemon/${id}`}>
          { pokemon.name }
          <img src={pokemon.image_url}></img>
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
