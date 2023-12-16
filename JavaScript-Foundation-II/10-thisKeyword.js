//this
// is the object that the function is a property of
//we ca nexecute the same code for multiple objects

const obj = {
  name: "Billy",

  sing() {
    return console.log(`lalala ${this.name}`);
  },

  singAgain() {
    return console.log(`${this.sing()} saing again!!`);
  },
};

obj.singAgain();

function importantPerson() {
  console.log(this.name + "!");
}

const name = "Sunny";
const objt1 = {
  name: "Cassy",
  importantPerson: importantPerson,
};

const objt2 = {
  name: "Jacob",
  importantPerson: importantPerson,
};

importantPerson()
console.log(name);