// Pure functions
// a function has to always return the same output given the same input
// the function can not modify anything outside itself
// no side effects

// doesnt effect the original array
const array = [1,2,3]
function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop()
  return newArray;
}

function multiplyBy2(arr) {
 return arr.map(item => item*2)
}

const array2 = removeLastItem(array);
const array3 = multiplyBy2(array);
console.log(array, array2, array3);

// ---------------

// Referential Transparency
function a(num1, num2) {
  return num1 + num2
}

a(3,4)

function b(num) {
  return num*2
}

b(a(3,4))