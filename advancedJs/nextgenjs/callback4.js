let name;

let getName = (cb) => {
	// get name from DB
	setTimeout(() => {
		name = "Srishti";
		cb();
	}, 2000);
}

let greet = () => {
	console.log(`Hello ${name}`);
}

getName(greet);