const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const outputSum = array.reduce((acc, val) => {
  return acc + val;
}, 100);

function sumCallback(acc, val) {
  if (acc) {
    return acc + val;
  } else {
    return val;
  }
}
console.log(outputSum);
Array.prototype.myReduce = function (callback, initialValue) {
  // here this points to an array

  // if (!callback) throw new Error(`${initialValue} is not a function`);
  if (!this) throw new Error("Array is not defined");
  if (this.length === 0) {
    if (initialValue) {
      return initialValue;
    } else {
      throw new Error("Reduce of empty array with no initial value");
    }
  }
  let currentVal;
  this.forEach((val, index) => {
    if (index === 0) {
      previousVal = initialValue;
      currentVal = callback(previousVal, val);
    } else {
      previousValue = currentVal;
      currentVal = callback(previousValue, val);
    }
  });
  return currentVal;
};

const resultVal = array.myReduce(sumCallback, 100);

console.log("my reduce result", resultVal);

const resultVal2 = array.myReduce(sumCallback);
console.log(resultVal2);

const array2 = [1, 2, 3, 1, 2, 3, 1, 1, 3];

const resultObj = array2.reduce((acc, val) => {
  let currentVal = val;
  //   console.log(acc[currentVal]);
  if (acc[val] === undefined) {
    acc[val] = 1;
  } else {
    acc[val] = acc[val] + 1;
  }
  return acc;
}, {});
console.log("Reduce ", resultObj);

const countingNumCallback = (acc, val) => {
  let currentVal = val;
  //   console.log(acc[currentVal]);
  if (acc[val] === undefined) {
    acc[val] = 1;
  } else {
    acc[val] = acc[val] + 1;
  }
  return acc;
};

const resultobj2 = array2.myReduce(countingNumCallback, {});
console.log(resultobj2);

let emptyArray = [];
// const emptyResult = emptyArray.myReduce(outputSum);
// const emptyResult = emptyArray.reduce(outputSum);
// console.log(emptyResult);

console.log(Array.__proto__);
