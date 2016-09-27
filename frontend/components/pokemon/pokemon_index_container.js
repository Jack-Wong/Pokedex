import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';
import { requestAllPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemon: state.pokemon
});

const PokemonIndexContainer = connect(
  mapStateToProps
)(PokemonIndex);

export default PokemonIndexContainer;
