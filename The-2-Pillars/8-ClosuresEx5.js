// const array = [1,2,3,4];
// for (var i=0; i < array.length; i++) {
//   setTimeout(function() {
//     console.log('I am at index ' + i)
//   }, 3000)
// }

// Solution 1
// const array = [1,2,3,4];
// // change var to let, let allows us to use block scoping
// for (let i=0; i < array.length; i++) {
//   setTimeout(function() {
//     // change i to array[i]
//     console.log('I am at index ' + array[i])
//   }, 3000)
// }


// Solution 2 w/o let
// const array = [1,2,3,4];
// for (var i=0; i < array.length; i++) {
//   // IIFE
//   (function(closureI) {
//     setTimeout(function() {
//       console.log('I am at index ' + array[closureI])
//     }, 3000)
//   })(i)
// }