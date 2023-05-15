const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArray = array.filter((val) => val > 3);
console.log(filteredArray);

Array.prototype.myFilter = function (callbackFn) {
  // this points to current Array
  const filterArray = [];
  this.forEach((element, index) => {
    if (callbackFn(element)) {
      filterArray.push(callbackFn(element));
    }
  });
  return filterArray;
};

const numberGreaterThan3 = function (value) {
  if (value > 3) {
    return value;
  }
  //   return value >3;
};

console.log(array.myFilter(numberGreaterThan3));

// 3 rounds - 2 tr 1 hr
