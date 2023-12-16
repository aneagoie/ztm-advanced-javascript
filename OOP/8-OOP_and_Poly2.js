class Character {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'atack with ' + this.weapon
    }
  }
  
  class Queen extends Character { 
    constructor(name, weapon, kind) {
      super(name, weapon) 
      this.kind = kind;
    }
    attack() {
      console.log(super.attack());
      return `I am the ${this.name} of ${this.kind}, now bow down to me! `
    }
  }
  
  const victoria = new Queen('Victoria', 'army', 'hearts');
  victoria.attack()
  
  