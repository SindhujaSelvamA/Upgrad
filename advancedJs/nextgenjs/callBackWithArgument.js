let getName = (cb) => {
	let name;
	// get name from DB
	setTimeout(() => {
		name = "Srishti";
		cb(name);
	}, 2000);
}

let greet = (nameVal) => {
	console.log(`Hello ${nameVal}`);
}

getName(greet);