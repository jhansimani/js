setTimeout(() => {
  console.log("Set Timeout called after 1000");
}, 1000);

function createSetTimout() {
  var timerId = 0;
  var timerMap = {};

  function setTimeoutPollyfill(callback, delay, ...arguments) {
    var id = timerId++;
    timerMap[id] = true;
    var start = Date.now();
    console.log("this", this.requestIdleCallback);
    function triggerCallback() {
      if (!timerMap[id]) {
        return;
      }
      if (Date.now > start + delay) {
        callback.apply(this, arguments);
      } else {
        requestIdleCallback(triggerCallback);
      }
    }
    requestIdleCallback(triggerCallback);
    return id;
  }
  function clearTimeoutPollyfill(id) {
    delete timerMap[id];
  }
  return { setTimeoutPollyfill, clearTimeoutPollyfill };
}

var { setTimeoutPollyfill, clearTimeoutPollyfill } = createSetTimout();

console.log("strart ");
var myId = setTimeoutPollyfill(function () {
  console.log("welcome to Set Timeout ");
}, 5);
console.log("end");

function createSetTimeout() {
  let timerId = 0;
  let timeMap = [];
  function setTimeoutPollyfill(callback, delay, ...arguments) {
    let id = this.timerId++;
    this.timerMap[id] = true;

    let start = Date.now();
    if (!this.timerMap[id]) {
      return;
    }
    if (Date.now() > start + delay) {
      callback().apply(this, arguments);
    } else {
      requestIdleCallback(triggerCallback);
    }

    requestIdleCallback(triggerCallback);
    return id;
  }

  return { setTimeoutPollyfill, clearTimeoutPollyfill };
}
