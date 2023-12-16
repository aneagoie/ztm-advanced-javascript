// Primitive types are immutable

var a = 5;
var b = a;

b++;
// console.log(a)
// console.log(b)

// let obj1 = {name: 'Yao', password: '123'};
// let obj2 = 'address in memory'

// obj2.password = 'easypeasy';
// console.log(obj1);
// // Both passwords changed because of pass by reference
// console.log(obj2);



// var c = [1,2,3,4,5]
// var d = [].concat(c);
// d.push(123712378327812787812)
// console.log(d);

let obj = {
  a: 'a', 
  b: 'b', 
  c: {
    deep: 'try and copy me'
  }
};
let clone = Object.assign({}, obj)
// spread operator ...
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)