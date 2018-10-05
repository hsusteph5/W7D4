import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import { merge } from "lodash";

const itemsReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
      debugger;
      return action.payload.items;
    default:
      return state;
  }

};


export default itemsReducer;
