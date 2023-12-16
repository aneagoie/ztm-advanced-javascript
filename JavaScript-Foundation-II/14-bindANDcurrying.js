function multiply(a, b) {
    return a*b
  }
  
  let multiplyByTwo = multiply.bind(this, 2)
  
  console.log(multiplyByTwo(4))
  
  
  let multiplyByTen = multiply.bind(this, 10)
  
  console.log(multiplyByTen(4))