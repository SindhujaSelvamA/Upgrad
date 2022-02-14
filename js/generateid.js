
function createEmployeeID() { 
	var prefix = "employee"; 
	var generateID = function() { 
		for (var i = 0; i < 5; i++) { 
			console.log(prefix + i); 
		} 
	} 
	return generateID; 
} 
var print = createEmployeeID(); 
print();



