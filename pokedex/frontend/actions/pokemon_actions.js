export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
import * as APIUtil from '../util/api_util';


export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};


//pokemon was the resp 
export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);