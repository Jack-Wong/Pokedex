import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    let poke_list;
    if(this.props.pokemon){
      poke_list = this.props.pokemon.map((poke, idx) => <PokemonIndexItem pokemon={poke} key={idx}/>)
    };

    return(
      <section>
        <ul>
          {poke_list}
        </ul>
      </section>
    );
  };
};

export default PokemonIndex;
