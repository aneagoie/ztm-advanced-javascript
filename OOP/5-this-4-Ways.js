// this
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Xavier', 55)
person1

// Implicit binding
const person2 = {
  name: 'Karen',
  age: 40,
  hi() {
    console.log('hi ', + this.name)
  }
}

// Explicit binding
const person3 = {
  name: 'Karen',
  age: 40,
  hi: function() {
    console.log('hi' + setTimeout)
  }.bind(window)
}

person3.hi()

// Arrow functions
const person4 = {
  name: 'Karen',
  age: 40,
  hi: function() {
    var inner = () => {
      console.log('hi ', this.name) 
    }
    return inner()
  }
}

person4.hi()