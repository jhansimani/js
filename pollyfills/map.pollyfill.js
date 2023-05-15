const array = [1, 2, 3, 4, 5, 6];
// const newArray = array.map((value)=> value *2 );
// console.log(newArray);

Array.prototype.myMap = function (callback) {
  console.log(this);
  const array = this;
  const updatedArray = [];
  array.forEach((element, index) => {
    updatedArray.push(callback(element));
  });

//   console.log(`updatedArray ${updatedArray}`);
  return updatedArray;
};

const doubleValue = (val) => {
  return val * 2;
};
console.log(array.myMap(doubleValue));

const filterGreateThan3 = (val) => {
    return val >3;
}

console.log('With predicate function');
console.log(array.myMap(filterGreateThan3));