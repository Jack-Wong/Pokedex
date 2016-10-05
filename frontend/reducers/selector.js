export const allToys = (pokemonDetail) => {
  var array = [];
  if (pokemonDetail){
    array = Object.keys(pokemonDetail.toys).map(toy => pokemonDetail.toys[toy]);
  };
  return array;
};

export const selectDetail = (pokemonDetail) => {
  if (pokemonDetail){
    return pokemonDetail;
  };
  return {
    image_url: '',
    name: '',
    poke_type: '',
    attack: '',
    defense: '',
    moves: []
  };
};

export const selectToy = (pokemonDetail, toyId) => {
  var array = []
  if (pokemonDetail){
    array = pokemonDetail.toys[toyId];
  };
  return array;
};
