import React from 'react';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    const { pokemon } = this.props;
    return(
      <section className="pokemon-detail">
        <ul>
          <img src={pokemon.image_url} alt={pokemon.name}/>
        </ul>
      </section>
    );
  };
};
