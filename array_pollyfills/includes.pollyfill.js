const array = [1, 2, 3, 3];
const index = array.includes(3, -1);
console.log(index);
Array.prototype.myIncludes = function (searchElement, fromIndex) {
  if (!fromIndex) {
    fromIndex = 0;
  } else {
    fromIndex = fromIndex;
    if (fromIndex > this.length) {
      return false;
    }
  }

  if (fromIndex > 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return true;
      }
    }
  } else {
    fromIndex = this.length + fromIndex;
    for (let i = fromIndex; i >= 0; i--) {
      if (this[i] === searchElement) {
        return true;
      }
    }
  }

  return false;
};

const index2 = array.myIncludes(3, -3);
console.log(index2);
