class MyCustomePromise {
  constructor(executor) {
    // value
    this.value = null;
    // resolve promise

    this.onFullfilled = null;
    this.isFullfilled = false;

    // resolve promise
    this.reason = null;
    this.onRejected = null;
    this.rejectedChain = [];
    this.isRejected = false;

    const resolve = (value) => {
      this.value = value;
      this.isFullfilled = true;
      if (typeof this.onFullfilled === "function") {
        this.onFullfilled(this.value);
      }
    };

    const reject = (reason) => {
      this.reason = reason;
      this.isRejected = true;
      if (this.rejectedChain.length) {
        this.rejectedChain.reduce((acc, fn) => fn(acc), this.reason);
        // this.onRejected(this.value);
      }
    };
    executor(resolve, reject);
  }
  then(onFullfilled) {
    if (onFullfilled) {
      this.onFullfilled = onFullfilled;
      console.log(this.onFullfilled);
      if (this.isFullfilled) {
        onFullfilled(this.value);
      }
      return this;
    }
  }
  catch(onRejected) {
    this.rejectedChain.push(onRejected);
    if (this.isRejected) {
      this.rejectedChain.reduce((acc, fn) => fn(acc), this.reason);
    }
    return this;
  }
  finally(fn) {
    this.rejectedChain.push(fn);
    if (this.isRejected) {
      this.rejectedChain.reduce((acc, fn) => fn(acc), this.reason);
    }
    // this.resolvedChain.push(fn);
    // if (this.isResolved) {
    //     this.resolvedChain.reduce((acc, fn) => fn(acc), this.value);
    //   }
  }
}

// const p1 = new Promise(function (resolve, reject) {
//   resolve("Jhansi");
// }).then((data) => console.log(data));

const p1 = new MyCustomePromise(function (resolve, reject) {
  resolve(10);
}).then((data) => console.log(data));

// const p1Error = new MyCustomePromise(function (reject) {
//   reject("Error");
// }).then((error) => console.log(`Promise returned ${error}`));
const p1Error = new MyCustomePromise(function (resolve, reject) {
  reject("Error");
})
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("i am finally block");
  });

const p2 = new MyCustomePromise(function (resolve, reject) {
  setTimeout(() => {
    resolve(10000);
  }, 5000);
}).then((data) => console.log(data));
