
function createEmployeeID() {
   var prefix = "employee";
   return generateID();
}

var generateID = function() {
   for (var i = 0; i < 5; i++) {
       console.log(prefix + i);
   }
}

var print = createEmployeeID();


