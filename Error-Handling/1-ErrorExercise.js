throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw Error
throw new Error // will create an instance of an Error in JavaScript and stop the execution of your script. 



function a() {
  const b =  new Error('what?')
  return b
}

a().stack

let error = new Error(message);
let error2 = new SyntaxError(message);
let error3 = new ReferenceError(message);