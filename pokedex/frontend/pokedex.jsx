//import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//necessary for page
import configureStore from './store/store.js';
import Root from './components/root';
import { Hashrouter, Route } from 'react-router-dom';

//testing
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import selectAllPokemon from './reducers/selectors.js';



document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  //Test
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;

  //

  ReactDOM.render(<Root store={store}/>, rootEl);
});
