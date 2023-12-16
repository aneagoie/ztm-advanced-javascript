//Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
curriedMultiply(5)(20)
const multiplyBy5 = curriedMultiply(5)
multiplyBy5(20)