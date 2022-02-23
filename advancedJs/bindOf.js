var person = {
 firstName: "Sakshi",
 lastName: "Jain",
 get: function() {
   console.log("Outer: " + this.firstName + " " + this.lastName);
   var print = function() {
     console.log("Inner: " + this.firstName + " " + this.lastName);
   }.bind(this, "Developer", "JavaScript");
   print();
 }
};

person.get();