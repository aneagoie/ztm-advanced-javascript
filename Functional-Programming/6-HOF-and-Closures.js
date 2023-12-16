/*
 HOF - Function that does one of two things
   Either takes one or more functions as arguments
   Returns a function as a result
*/
const hof = () => () => console.log(5);
hof()
// functions
hof()()
// 5

const hof2 = (fn) => (fn) => fn(5);
hof2(function a(x){ return x})

/*
 Closures - Mechanism for containing some sort of state,
   We create a closure whenever a function accesses a variable declared outside
   of the immediate function scope
*/

const closure = function() {
  let count = 0;
  return function increment() {
    count++
    return count
  }
}

closure()
// function
const incrementFn = closure();
incrementFn()
incrementFn()