const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter.bind(character);
  
  
  console.log('?', giveMeTheCharacterNOW());
  