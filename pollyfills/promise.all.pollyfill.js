const dummyPromise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(time > 2000){
            reject(`rejected ${time}`)
        }
      resolve(time);
    }, time);
  });
};

const tasksArray = [dummyPromise(1000), dummyPromise(2000), dummyPromise(3000)];

const promiseAllPolyyfill = (promiseArray) => {
  return new Promise((resolve, reject) => {
    const output = [];
    promiseArray.forEach((promise, index) => {
      promise
        .then((data) => {
          output[index] = data;
          if (index === tasksArray.length - 1) {
            resolve(output);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
promiseAllPolyyfill(tasksArray)
  .then((data) => {
    console.log(`data ${data}`);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

  
