const getDetails = (callback) => {
   setTimeout(() => {
       let details = {
           firstName: "Srishti",
           lastName: "Gupta",
           gender: "female"
       }

       callback(details);
   }, 2000);
}

const printDetails = (details) => {
   for (let key in details) {
       console.log(`${key} : ${details[key]}`);
   }
}

getDetails(printDetails);