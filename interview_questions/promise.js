class Promise {
  resolvedChain = [];
  isResolved = false;
  resolvedValue = null;
  constructor(executor) {
    const resolve = (val) => {
      this.isResolved = true;
      this.resolvedValue = val;
      if (this.resolvedChain.length) {
        this.resolvedValue = this.resolvedChain.reduce(
          (acc, fn) => fn(acc),
          this.resolvedValue
        );
      }
      console.log(this.resolvedValue);
    };
    const reject = (reason) => {};
    executor(resolve);
  }

  then(callback) {
    this.resolvedChain.push(callback);
    if (this.isResolved) {
      this.resolvedValue = this.resolvedChain.reduce(
        (acc, fn) => fn(acc),
        this.resolvedValue
      );
    }
    console.log(this.resolvedValue);
    return this;
  }
}

const p1 = new Promise((resolve) => {
  //   resolve(6);
  setTimeout(() => {
    resolve(2);
  });
});
p1.then((val) => val * 10)
  .then((val1) => val1 * 2)
  .then((va2) => console.log(va2));
