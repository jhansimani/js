// const p1 = new Promise((resolve) => {
//   resolve(10);
// });
// p1.then((data) => {
//   console.log(data);
// });

class MyCustomPromise {
  // resolve function  varibles
  resolvedValue = null;
  isResolved = false;
  resolvedChain = [];

  // reject function variables
  rejectedValue = null;
  isRejected = false;
  rejectedChain = [];

  constructor(executor) {
    const resolve = (value) => {
      this.resolvedValue = value;
      this.isResolved = true;
      if (this.resolvedChain.length) {
        this.resolvedChain.reduce((acc, fn) => fn(acc), this.resolvedValue);
      }
    };

    const reject = (value) => {
      this.rejectedValue = value;
      this.isRejected = true;
      if (this.rejectedChain.length) {
        this.rejectedChain.reduce((acc, fn) => fn(acc), this.rejectedValue);
      }
    };

    executor(resolve, reject);
  }

  then(callback) {
    this.resolvedChain.push(callback);
    if (this.isResolved) {
      //   callback(this.resolvedValue);
      this.resolvedChain.reduce((acc, fn) => fn(acc), this.resolvedValue);
    }

    return this;
  }
  catch(callback) {
    this.rejectedChain.push(callback);
    if (this.isRejected) {
      this.rejectedChain.reduce((acc, fn) => fn(acc), this.rejectedValue);
    }
    return this;
  }
  finally(callback) {
    this.resolvedChain.push(callback);
    this.rejectedChain.push(callback);

    if (this.isRejected) {
      this.rejectedChain.reduce((acc, fn) => fn(acc), this.rejectedValue);
    }
    if (this.isResolved) {
      this.resolvedChain.reduce((acc, fn) => fn(acc), this.resolvedValue);
    }
  }
}

const p2 = new MyCustomPromise((resolve) => {
  setTimeout(() => {
    resolve(200);
  });
});
p2.then((data) => {
  return data * 2;
})
  .then((data2) => {
    return data2 + 100;
  })
  .then((final) => {
    console.log(`final resolved value: ${final}`);
  });

const p3 = new MyCustomPromise((resolve, reject) => {
  setTimeout(() => {
    reject(200);
  });
});
p3.catch((data) => {
  return data * 2;
})
  .catch((data2) => {
    return data2 + 100;
  })
  .catch((final) => {
    return `final rejected value: ${final}`;
    console.log(`final rejected value: ${final}`);
  })
  .finally((finalVal) => {
    console.log(finalVal);
  });
const p4 = new MyCustomPromise((resolve, reject) => {
  resolve("Jhansi");
}).then((val) => {
  console.log(val);
});
