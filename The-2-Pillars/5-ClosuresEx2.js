function heavyDuty(item) {
    const bigArray = new Array(7000).fill('😄')
    console.log('created!');
    return bigArray[item]
  }
  
  heavyDuty(699)
  heavyDuty(699)
  heavyDuty(699)
  const getHeavyDuty = heavyDuty2();
  getHeavyDuty(699)
  getHeavyDuty(699)
  getHeavyDuty(699)
  
  // but i dont want to pollute the global namespace..
  function heavyDuty2() {
    const bigArray = new Array(7000).fill('😄')
    console.log('created Again!')
    return function(item) {
      return bigArray[item]
    }
  }