import { connect } from 'react-redux';
import ToyDetail from './toy_detail';
import { selectToy } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  const { params: {toyId} } = ownProps;
  const toy = selectToy(state.pokemonDetail, toyId);
  return { toy };
};

const ToyDetailContainer = connect(
  mapStateToProps
)(ToyDetail);

export default ToyDetailContainer;
