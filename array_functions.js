const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.push(10);
console.log(array);
array.unshift(0);
console.log(array);
array.shift();
console.log(array);
array.pop();
console.log(array);

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array2.filter((val) => val > 5));
//(4) [6, 7, 8, 9]
console.log(array2.map((val) => val > 5));
// (9) [false, false, false, false, false, true, true, true, true]

const array3 = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 3, 3, 2, 2, 2, 5, 6, 8];
const resultArray = [];
array3.forEach((val, index) => {
  if (index === 0) {
    resultArray.push(val);
  } else {
    if (!resultArray.includes(val)) {
      resultArray.push(val);
    }
  }
});
console.log(resultArray);
const charArray = ["a", "b", "c", "d"];

const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array4.indexOf(3));
console.log(array4.findIndex((va) => va === 3));
console.log(array4.find((va) => va === 3));

let obj = {
  firstname: "John",
  lastname: "Smith",
  fullname: () => {
    console.log(`Arrow function ${this.firstname} ${this.lastname}`);
  },
  getFullName: function () {
    console.log(`Regular function ${this.firstname} ${this.lastname}`);
  },
};

obj.fullname();
obj.getFullName();

const ParentObj = {
  firstname: "John",
  lastname: "Smith",
  getFullName: function () {
    console.log(`Regular function ${this.firstname} ${this.lastname}`);
    return `${this.firstname} ${this.lastname}`;
  },
};

const ChildObj = {
  age: 20,
  getFullDetails: function () {
    this.getFullName();
    console.log(
      `${this.firstname} ${this.lastname} ${this.getFullName()} ${this.age}`
    );
  },
  __proto__:ParentObj
};

ChildObj.getFullDetails();
