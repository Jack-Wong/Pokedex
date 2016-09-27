import { createStore } from 'redux';
import PokemonReducer from '../reducers/pokemon_reducer';
import masterMiddleware from '../middleware/master_middleware';

const configureStore = () => (
  createStore(
    PokemonReducer,
    masterMiddleware
  )
);

export default configureStore;
