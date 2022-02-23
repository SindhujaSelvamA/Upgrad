let add = (callback) => {
    let x = 2, y = 3;
    console.log("Sum :", x + y);
    callback();
}

add(function() {
    console.log("Finished this operation!");
});

const subtract = (callback) => {
    let x = 2, y = 3;
    console.log("Difference :", x - y);
    callback();
}

subtract(function() {
    console.log("Finished this operation!");
});