promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);
});

console.log(promiseObj);