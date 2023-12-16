// Immutability
// Not changing the data, not changing the state
// Instead making copies of the state
const obj = {name: 'Andrei'}
function clone(obj) {
  return {...obj}; // this is pure
}
// Mutating the state
// obj.name = 'Nana'

// -----------

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = 'Nana'
  return obj2
}
const updatedObj = updateName(obj)
console.log(obj, updatedObj)