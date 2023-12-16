const multiplyBy = function(num1) {
    return function(num2) {
      return num1 * num2
    }
  }
  
  const multiplyBy = (num1) => (num2) =>  num1*num2
  
  const multiplyByTwo = multiplyBy(2);
  const multiplyByFive = multiplyBy(5)
  multiplyBy(4)(6)
  multiplyByTwo(10)
  multiplyByTwo(48123)
  multiplyByFive(587123812)