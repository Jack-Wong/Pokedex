import { PokemonConstants } from '../actions/pokemon_actions';
import { fetchAllPokemon } from '../util/api_util';
import { fetchOnePokemon } from '../util/api_util';
import { receiveAllPokemon } from '../actions/pokemon_actions';
import { receiveOnePokemon } from '../actions/pokemon_actions';
import { postPokemon } from '../util/api_util';
import { receiveNewPokemon } from '../actions/pokemon_actions';
import { hashHistory } from 'react-router';

const PokemonMiddleware = ({dispatch}) => next => action => {
  switch(action.type){
    case PokemonConstants.REQUEST_ALL_POKEMON:
      let success = data => dispatch(receiveAllPokemon(data));
      fetchAllPokemon(success);
      next(action);
      break;
    case PokemonConstants.REQUEST_ONE_POKEMON:
      success = data => dispatch(receiveOnePokemon(data));
      fetchOnePokemon(action.id, success);
      next(action);
      break;
    case PokemonConstants.CREATE_POKEMON:
      success = data => {
        dispatch(receiveNewPokemon(data));
        hashHistory.push('/pokemon/' + data.id);
      };
      postPokemon(action.pokemon, success);
      next(action);
      break;
    default:
      next(action);
  }
};

export default PokemonMiddleware;
