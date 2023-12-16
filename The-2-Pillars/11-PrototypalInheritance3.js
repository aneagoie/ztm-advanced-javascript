let human = {
    mortal: true
  }
  let socrates = Object.create(human)
  socrates.age = 45
  console.log(human.isPrototypeOf(socrates))