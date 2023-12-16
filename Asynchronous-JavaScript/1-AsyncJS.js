setTimeout(()=>{console.log('1', 'is the loneliest number')}, 0)
setTimeout(()=>{console.log('2', 'can be as bad as one')}, 10)

//2
Promise.resolve('hi').then((data)=> console.log('2', data))

//3
console.log('3','is a crowd')