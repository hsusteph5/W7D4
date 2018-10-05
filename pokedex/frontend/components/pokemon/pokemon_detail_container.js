import { connect } from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';
import { receiveOnePokemon, requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: state.entities.pokemon,
  items: state.entitites.item
});

const mapDispatchToProps = dispatch => ({
  receiveOnePokemon: pokemon => dispatch(requestSinglePokemon(pokemon))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
