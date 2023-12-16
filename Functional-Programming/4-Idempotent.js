// Idempotence:
function notGood() {
    return Math.random()
    // new Date();
  }
  
  function good() {
    return 5
  }
  
  Math.abs(Math.abs(10))