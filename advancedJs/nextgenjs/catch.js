let promise = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        reject(new Error("Could not get the name from DB!"));
    }, 3000);

});

// defining the consumer
promise.catch(err => {
    console.log(`Error occurred = ${err}`);
});