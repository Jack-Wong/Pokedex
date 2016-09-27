import { Router, Route, hashHistory } from 'react-router';
import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { requestAllPokemon } from '../actions/pokemon_actions';
import { requestOnePokemon } from '../actions/pokemon_actions';

const Root = ({ store }) => {

  const onEnterRequestAllPokemon = () => {
    store.dispatch(requestAllPokemon());
  };

  const onEnterRequestOnePokemon = () => {
    store.dispatch(requestOnePokemon());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={onEnterRequestAllPokemon}>
          <Route path="pokemon/:pokemon_id" component={App} onEnter={onEnterRequestOnePokemon}>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
