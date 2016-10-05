import { Router, Route, hashHistory } from 'react-router';
import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ToyDetailContainer from './toys/toy_detail_container';
import { requestAllPokemon } from '../actions/pokemon_actions';
import { requestOnePokemon } from '../actions/pokemon_actions';

const Root = ({ store }) => {
  const onEnterRequestAllPokemon = () => {
    store.dispatch(requestAllPokemon());
  };

  const onEnterRequestOnePokemon = (nextState) => {
    store.dispatch(requestOnePokemon(nextState.params.pokemon_id));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={onEnterRequestAllPokemon}>
          <Route path="pokemon/:pokemon_id" component={PokemonDetailContainer} onEnter={onEnterRequestOnePokemon}>
            <Route path="toy/:toyId" component={ToyDetailContainer}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
