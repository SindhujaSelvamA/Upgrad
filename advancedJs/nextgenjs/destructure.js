const greetUser = (person) => {
    // TODO: Use spread operator to get the values of the keys - firstName and lastName with alias names fn and ln respectively
      const{firstName:fn,lastName:ln}=person
    // WARNING: DO NOT EDIT THE LINE GIVEN BELOW
    console.log("Hello " + fn + " " + ln + "!");
}

// object for a person
const person = {
    firstName: "Srishti",
    lastName: "Gupta",
    nationality: "Indian",
    gender: "Female"
};

greetUser(person);