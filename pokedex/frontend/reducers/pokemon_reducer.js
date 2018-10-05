import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import { merge } from "lodash";

const pokemonReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      // merge({newState}, action.pokemon);
      return action.pokemon;
    case RECEIVE_ONE_POKEMON:
      debugger;
      newState[action.payload.pokemon.id] = action.payload.pokemon;
      return newState;
    default:
      return state;
  }

};



export default pokemonReducer;
