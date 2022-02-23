var person = {
 firstName: "Sakshi",
 lastName: "Jain",
 get: function() {
   console.log("Outer: " + this.firstName + " " + this.lastName);
   var print = function(role, language) {
     console.log(role, language);
     console.log("Inner: " + this.firstName + " " + this.lastName);
   }.apply(this, ["Developer", "JavaScript"]);
 }
};

person.get();