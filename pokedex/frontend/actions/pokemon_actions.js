export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";
import * as APIUtil from '../util/api_util';

//receiving ALL pokemon
export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

// ajax request + then the dispatch of the action
//pokemon was the response of the AJAX request
export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);



//receiving one Pokemon
//payload = {items: { }, pokemon: {}}
export const receiveOnePokemon = (payload) => {
  return {
    type: RECEIVE_ONE_POKEMON,
    payload
  };
};

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtil.fetchOnePokemon(id)
    .then(pokemon => dispatch(requestSinglePokemon(pokemon)))
);
