import React from 'react';
import { withRouter } from 'react-router';

class PokemonIndexItem extends React.Component {
  constructor(props){
    super(props);
  };

  handleClick(router, url){
    return (event) => {
      event.preventDefault();
      router.push(url);
    };
  };

  render(){
    const { pokemon, router } = this.props;
    return(
      <li onClick={this.handleClick(router, '/pokemon/' + pokemon.id)}>
        <span>{pokemon.id}</span>
        <img src={pokemon.image_url} alt={pokemon.name}/>
        <span>{pokemon.name}</span>
      </li>
    );
  };
};

export default withRouter(PokemonIndexItem);
