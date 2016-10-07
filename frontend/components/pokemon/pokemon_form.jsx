import React from 'react';
import merge from 'lodash/merge';

class PokemonForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: "",
      defense: "",
      moves: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  update(key){
    if (key === 'moves'){
      return event => this.setState({
        [key]: merge([], this.state.moves, [event.target.value])
      });
    }
    return event => this.setState({[key]: event.target.value});
  };

  handleSubmit(){
    return event => {
      event.preventDefault();
      console.log(this.state);
      this.props.createPokemon(this.state);
    };
  };

  render(){
    return(
      <section className='pokemon-detail'>
        <img src="/assets/pokemon-logo.png"/>
        <form className="pokemon-form" onSubmit={this.handleSubmit()}>
          <input type="text" value={this.state.name} placeholder="Name" onChange={this.update("name")}/>
          <input type="text" value={this.state.image_url} placeholder="Image URL" onChange={this.update("image_url")}/>
          <select value={this.state.poke_type} onChange={this.update("poke_type")}>
            {this.props.pokemonTypes.map((type, idx) => {
              return <option value={type} key={idx}>{type}</option>
            })}
          </select>
          <input type="text" value={this.state.attack} placeholder="Attack" onChange={this.update("attack")}/>
          <input type="text" value={this.state.defense} placeholder="Defense" onChange={this.update("defense")}/>
          <input type="text" value={this.state.moves} placeholder="Move" onChange={this.update("moves")}/>
        <button>Create Pokemon</button>
        </form>
      </section>
    );
  };
};

export default PokemonForm;
