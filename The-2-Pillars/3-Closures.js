function a() {
    let grandpa = 'grandpa'
    return function b() {
      let father = 'father'
      return function c() {
        let son = 'son'
        return `${grandpa} > ${father} > ${son}`
      }
    }
  }
  
  a()
  
  //closures and higher order function
  function boo(string) {
    return function(name) {
      return function(name2) {
        console.log(`hi ${name2}`)
      }
    }
  }
  
  const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`)
  
  boo('hi')('john')('tanya');
  
  // AHH! HOW DOES IT REMEMBER THIS 5 years from now?
  booString = boo2('sing');
  booStringName = booString('John');
  booStringNameName2 = booStringName('tanya')
  