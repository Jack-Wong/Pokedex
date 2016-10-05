import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { allToys } from '../../reducers/selector';
import { selectDetail } from '../../reducers/selector';

const mapStateToProps = state => ({
  pokemonDetail: selectDetail(state.pokemonDetail),
  toys: allToys(state.pokemonDetail)
});

const PokemonDetailContainer = connect(
  mapStateToProps
)(PokemonDetail);

export default PokemonDetailContainer;
