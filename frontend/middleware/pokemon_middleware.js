import { PokemonConstants } from '../actions/pokemon_actions';
import { fetchAllPokemon } from '../util/api_util';
import { receiveAllPokemon } from '../actions/pokemon_actions';

const PokemonMiddleware = ({dispatch}) => next => action => {
  switch(action.type){
    case PokemonConstants.REQUEST_ALL_POKEMON:
      let success = data => dispatch(receiveAllPokemon(data));
      fetchAllPokemon(success);
      next(action);
      break;
    case PokemonConstants.REQUEST_ONE_POKEMON:
      success = data => dispatch(receiveOnePokemon(data));
      fetchOnePokemon(success);
      next(action);
      break;
    default:
      next(action);
  }
};

export default PokemonMiddleware;
