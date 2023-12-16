const obj = {name: 'Sally'}
obj.hasOwnProperty('name')
// true

function a() {}
a.hasOwnProperty('call')
a.hasOwnProperty('bind')
a.hasOwnProperty('apply')
// false
a.hasOwnProperty('name')
// true

function multiplyBy5(num) {
  return num*5
}

multiplyBy5.__proto__
// f () { [native code] }

multiplyBy5.__proto__
=
Function.prototype
// proto is just a reference to up the chain prototype

const array = []
array.hasOwnProperty('map')
// false
array.__proto__.hasOwnProperty('map')
// true
Array.prototype
// [constructor: f]
array.__proto__
// [constructor: f]