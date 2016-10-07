export const fetchAllPokemon = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/pokemon',
    success
  });
};

export const fetchOnePokemon = (id, success) => {
  $.ajax({
    method: 'GET',
    url: 'api/pokemon/' + id,
    success
  });
};

export const postPokemon = (pokemon, success) => {
  console.log("here")
  $.ajax({
    method: 'POST',
    url: 'api/pokemon/',
    data: {pokemon: pokemon},
    success
  });
};
