import React from 'react';
import ToyIndexItem from '../toys/toy_index_item'

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    const { pokemonDetail, toys, children } = this.props;
    const formatted_toys = toys.map((toy, idx) => <li key={idx}><img src={toy.image_url}/></li>);
    const toy_list = toys.map((toy, idx) => <ToyIndexItem toy={toy} key={idx}/>);
    return(
      <section className="pokemon-detail">
        <ul>
          <img src={pokemonDetail.image_url} alt={pokemonDetail.name}/>
            <li><h2>{pokemonDetail.name}</h2></li>
            <li>Type: {pokemonDetail.poke_type}</li>
            <li>Attack: {pokemonDetail.attack}</li>
            <li>Defense: {pokemonDetail.defense}</li>
            <li>Moves: &#34;{pokemonDetail.moves.join(", ")}&#34;</li>
        </ul>
        <section className="toys">
          <h3>Toys</h3>
          <ul className="toy_list">
            {toy_list}
          </ul>
        </section>
        {children}
      </section>
    );
  };
};

export default PokemonDetail;
