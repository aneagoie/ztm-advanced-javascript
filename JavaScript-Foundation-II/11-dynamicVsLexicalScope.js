// const a = function () {
//   console.log(this);

//   const b = function () {
//     console.log(this);

//     const c = {
//       hi: function () {
//         console.log(this);
//       },
//     };
//     c.hi();
//   };
//   b();
// };

// a();

const obj = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = () => {
      console.log("b", this);
    };
    return anotherFunc.bind(this);
  },
};

obj.sing()();
// obj.sing()();
