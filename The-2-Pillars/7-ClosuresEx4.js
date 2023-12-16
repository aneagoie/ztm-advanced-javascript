let view;
function initialize() {
  let called = 0;
  return function() {
    if (called > 0) {
      return;
    } else {
      called++;
      view = 'mountain emoji';
      console.log('view has been set');
    }
  }
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();
console.log(view);