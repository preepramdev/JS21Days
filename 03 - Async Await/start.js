(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  function simulateAsyncAPI(text, timeout) {
    setTimeout(() => console.log(text), timeout);
  }

  simulateAsyncAPI('A', 1000 * 1);
  simulateAsyncAPI('B', 500 * 1);
  simulateAsyncAPI('C', 100 * 1);

  // 2. Callback
  function simulateAsyncAPICallback(text, timeout, callback) {
    setTimeout(() => {
      console.log(text);
      if (callback) callback();
    }, timeout);
  }

  simulateAsyncAPICallback('Callback A', 1000 * 2, () => {
    simulateAsyncAPICallback('Callback B', 500, () => {
      simulateAsyncAPICallback(' Callback C', 100);
    });
  });

  // 3. Promise
  function simulateAsyncAPIPromise(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (text === '') reject('Promise Text got rejected Bcuz Empty');

        console.log(text);
        resolve();
      }, timeout);
    });
  }

  simulateAsyncAPIPromise('Promise A', 1000 * 3)
    .then(() => {
      return simulateAsyncAPIPromise('Promise B', 500);
    })
    .then(() => {
      return simulateAsyncAPIPromise('Promise C', 100);
    })
    .then(() => {
      return simulateAsyncAPIPromise('', 50);
    })
    .catch(error => {
      console.error(error);
    });

  // 4. Async/Await
  function simulateAsyncAPIAsyncAwait(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text === '') reject('Async/Await Text got rejected Bcuz Empty');

        console.log(text);
        resolve();
      }, timeout);
    });
  }

  async function run() {
    try {
      await simulateAsyncAPIAsyncAwait('Async/Await A', 1000 * 4);
      await simulateAsyncAPIAsyncAwait('Async/Await B', 500);
      await simulateAsyncAPIAsyncAwait('Async/Await C', 100);
      await simulateAsyncAPIAsyncAwait('', 50);
    } catch (error) {
      console.error(error);
    }
  }
  run();

})();
