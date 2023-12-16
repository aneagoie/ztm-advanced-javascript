let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    console.log('5');
  },
  sing() {
    if (this.fire) {
    console.log(`I am ${this.name}, the breather of fireeeeee`);
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    console.log('1');
  }
}

lizard.__proto__ = dragon;
// lizard.sing()
dragon.__proto__
// Base object
dragon.isPrototypeOf(lizard)