export const allToys = (state) => {
  console.log(state.toys);
  var array = [];
  array = Object.keys(state.toys).map(toy => state.toys[toy]);
  return array;
}
