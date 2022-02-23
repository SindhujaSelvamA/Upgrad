const mergeStudents = (classA, classB) => {
    /* DONE 1: Created a variable with identifier mergedClass
    Variable mergedClass must contain the classA's students, then two students "Emily" and "Frank", and then class B's students 
    */
    const mergedClass = [...classA, "Emily", "Frank", ...classB];

    // DONE 2: Printed the variable mergedClass on the console
    console.log(mergedClass);
}

// arrays containing names of students in two classes
const classA = ["Alice", "Bob", "Catherine", "Dan"];
const classB = ["George", "Jane", "Katy", "Luis"];

mergeStudents(classA, classB);