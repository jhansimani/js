class MyCustomePromise {
  constructor(executor) {
    this.value = null;
    this.onFullfilled = null;

    this.isFullfilled = false;
    this.isCalled = false;

    const resolve = (value) => {
      this.value = value;
      this.isFullfilled = true;
      if (typeof this.onFullfilled === "function") {
        this.onFullfilled(this.value);
        this.isCalled = true;
      }
    };

    executor(resolve);
  }
  then(cb) {
    this.onFullfilled = cb;
    if (this.isFullfilled) {
      this.onFullfilled(this.value);
    }
    return this;
  }
}

const p1 = new MyCustomePromise((resolve, reject) => {
  resolve("Jhansi ");
  //   setTimeout(() => {
  //     resolve("Jhansi ");
  //   }, 1000);
}).then((data) => {
  console.log(data);
});
console.log(p1);

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Jhansi ");
  }, 1000);
}).then((data) => {
  console.log(data);
});
console.log(p2);
