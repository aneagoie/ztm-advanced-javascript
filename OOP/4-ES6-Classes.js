// ES6 Classes
// Class keyword is still just prototypal inheritance
class Elf {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    // attack is outside because everytime we use the New keyword the constructor
    // function gets run
    attack() {
      return 'attacks with ' + this.weapon;
    }
  }
  
  
  const peter = new Elf('Peter', 'stones')
  console.log(peter instanceof Elf)
  console.log(peter.attack())
  const sam = new Elf('Sam', 'fire')
  console.log(sam.attack())