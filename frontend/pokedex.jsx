import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

const store = configureStore();
window.store = store

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(window.pokemonTypes);
  const root = document.getElementById('root');
  ReactDom.render(<Root store={store} />, root);
});
