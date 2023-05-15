const array = [1, 2, 3, 3];

// console.log(index2);

// return index if index is found in array otherwise return -1
Array.prototype.findIndex = function (callback) {
  // this points to array
  const array = this;
  if (typeof callback === "function") {
    for (let i = 0; i < array.length; i++) {
      let result = callback(array[i]);
      if (result) {
        return i;
      }
    }
    return -1;
  } else {
    return `${callback} is not a function`;
  }
};

const index2 = array.findIndex((val) => {
  return val > 7;
});
console.log(index2);
