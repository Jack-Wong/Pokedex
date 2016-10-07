import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { createPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemonTypes: state.pokemonTypes
})

const mapDispatchToProps = dispatch => ({
  createPokemon: pokemon => dispatch(createPokemon(pokemon))
});

const PokemonDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);

export default PokemonDetailContainer;
