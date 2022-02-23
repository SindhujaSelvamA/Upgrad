var side = 5;
console.log(calculateArea(side));
console.log(calculateVolume(side));

// Function to calculate area of a square
function calculateArea (side) {
   return side * side;
};

// Function to calculate volume of a square
var calculateVolume = function(side) {
   return side * side * side;
}