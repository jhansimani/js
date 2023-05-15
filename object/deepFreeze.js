"use strict";

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

Object.freeze(obj1);
// obj1.a = 10;
console.log(obj1); // strict mode - TypeError: Cannot assign to read only property 'a' of object '#<Object>'

const obj2 = {
  a: {
    b: "b1",
    c: { d: "d1" },
  },
};

Object.freeze(obj2);
// obj2.a.b.c = {
//   d: "d2",
// };
obj2.a.b = {
  b1: "b1",
};
console.log(obj2); // non strict mode - { a: { b: { b1: 'b1' }, c: { d: 'd1' } } }

// implement deepFreeze

const deepFreeze = function (obj) {
  const propertyNames = Object.getOwnPropertyNames(obj);
  for (let property of propertyNames) {
    let value = obj[property];
    obj[property] =
      value && typeof property === "object"
        ? Object.freeze(deepFreeze(obj[property]))
        : value;
  }
};
deepFreeze(obj2);



// TypeError: Cannot assign to read only property 'a' of object '#<Object>'
