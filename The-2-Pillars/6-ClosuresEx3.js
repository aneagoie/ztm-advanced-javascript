// Exercise:
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
      timeWithoutDestruction = -1;
      return '💥';
    }
  
    setInterval(passTime, 1000);
    return {totalPeaceTime}
  }
  
  const ww3 = makeNuclearButton();
  ww3.totalPeaceTime()