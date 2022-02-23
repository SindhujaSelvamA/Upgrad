// DONE 1: Declared an object named employee which contains the keys with identifiers - firstName and lastName
var employee = {
    firstName: "Srishti",
    lastName: "Gupta",

    // DONE 2: Inside the employee object, defined a method with identifier get which prints the values of keys firstName and lastName on the conosole
    get: function() {
        console.log(this.firstName + " "+ this.lastName + " is an employee of our organization.");
    }
}

// DONE 3: Called the get method of the employee object
employee.get();