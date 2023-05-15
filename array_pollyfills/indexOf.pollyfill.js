const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = array.indexOf(3, array.length + 2);
// console.log(index);

Array.prototype.myIndexOf = function (searchElement, fromIndex) {
  const array = this;
  if (fromIndex > array.length) {
    return -1;
  }
  let startIndex;
  if (fromIndex) {
    startIndex = fromIndex;
  } else {
    startIndex = 0;
  }

  for (let i = startIndex; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
};
const index2 = array.myIndexOf(3, array.length + 2);
console.log(index2);
const index3 = array.myIndexOf(3);
console.log(index3);
const index4 = array.myIndexOf(3, 6);
console.log(index4);
