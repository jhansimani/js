const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise 1 resolved successfully");
  }, 3000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise 2 resolved successfully");
  }, 500);
});
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise 3 resolved successfully");
  }, 1000);
});
const promiseArray = [p1, p2, p3];
Promise.race(promiseArray)
  .then((data) => {
    console.log("Built in Race Promise\n", data);
  })
  .catch((err) => console.log("Built in Race Promise Error\n", err));
const myRacePromise = function (promiseArray) {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const promiseAll = function (promiseArray) {
  return new Promise((resolve, reject) => {
    const output = [];
    promiseArray.forEach((promise, index) => {
      promise
        .then((data) => {
          output[index] = data;
          if (index === promiseArray.length - 1) {
            resolve(output);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
myRacePromise(promiseArray)
  .then((val) => {
    console.log("Custom  Race Promise Resolve and reject\n", val);
  })
  .catch((err) => {
    console.log("Custom  Race Promise Resolve and reject\n", err);
  });

const p1Reject = new Promise((reject) => {
  setTimeout(() => {
    reject("promise 1 rejected ");
  }, 2000);
});
const p2Reject = new Promise((reject) => {
  setTimeout(() => {
    reject("promise 2 rejected");
  }, 3000);
});
const p3Reject = new Promise((reject) => {
  setTimeout(() => {
    reject("promise 3 rejected");
  }, 500);
});
const p4Reject = new Promise((reject) => {
  setTimeout(() => {
    reject("promise 4 rejected");
  }, 1500);
});
const promiseRejected = [p1Reject, p2Reject, p3Reject, p4Reject];

myRacePromise(promiseRejected)
  .then((val) => {
    console.log("Custom  Race Promise Resolve and reject\n", val);
  })
  .catch((err) => {
    console.log("Custom  Race Promise Resolve and reject\n", err);
  });

promiseAll(promiseArray)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

promiseAll(promiseRejected)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
