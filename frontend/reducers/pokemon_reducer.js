import { PokemonConstants } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const PokemonReducer = (state={}, action) => {
  switch(action.type){
    case PokemonConstants.RECEIVE_ALL_POKEMON:
      return merge({}, state, {pokemon: action.pokemon});
    case PokemonConstants.REQUEST_ALL_POKEMON:
      return merge({}, state);
    case PokemonConstants.RECEIVE_ONE_POKEMON:
      return merge({}, state, {pokemonDetail: action.pokemon});
    default:
      return state
  }
}

export default PokemonReducer;
