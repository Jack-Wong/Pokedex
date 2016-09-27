import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const App = () => (
  <div>
    <PokemonIndexContainer/>
    <PokemonDetailContainer/>
  </div>
);

export default App;
