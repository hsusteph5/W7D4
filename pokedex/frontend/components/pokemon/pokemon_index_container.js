import { connect } from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';
import { receiveAllPokemon, requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  // piece of state that container subscribes to
  pokemons: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  // dispatch requestAllPokemon action.
  requestAllPokemon: pokemon => dispatch(requestAllPokemon(pokemon))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
