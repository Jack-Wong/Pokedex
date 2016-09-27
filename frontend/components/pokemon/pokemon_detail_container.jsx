import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import { allToys } from '../../reducers/selector';

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  toys: allToys(state)
});

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (pokemon) => dispatch(requestOnePokemon(pokemon))
});

const PokemonDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);

export default PokemonDetailContainer;
