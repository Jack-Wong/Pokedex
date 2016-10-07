import { createStore } from 'redux';
import PokemonReducer from '../reducers/pokemon_reducer';
import masterMiddleware from '../middleware/master_middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
    PokemonReducer,
    preloadedState,
    masterMiddleware
  )
);

export default configureStore;
