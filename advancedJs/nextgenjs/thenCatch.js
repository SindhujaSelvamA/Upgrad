// defining the promise object with the producer
let promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        reject(new Error("Could not get the name from DB!"));
    }, 3000);

});

// defining the consumer - then() method
promiseObj.then(val => {
    console.log(`Name received from DB = ${val}`);
});

// defining the consumer - catch() method
promiseObj.catch(err => {
    console.log(`Error occurred = ${err}`);
});