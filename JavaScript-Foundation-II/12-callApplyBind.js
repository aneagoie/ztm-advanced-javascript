//Call() //Apply() //Bind()

// function a() {
//   console.log("hi");
// }

// a.apply()

const wizard = {
  name: "Merlin",
  health: 50,
  heal(n1,n2) {
    return (this.health += n1 + n2);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};
console.log("1", archer);
const healA = wizard.heal.bind(archer, 50, 30);
healA() 
console.log("2", archer);
