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

export const createPokemon = (pokemon, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/pokemon/',
    data: {pokemon},
    success
  });
};
