// This file is not meant to be seen by you :)

const fs = require('fs');

//  function save_file(filepath, data, on_error); creates file with name 'filepath (string: mandatory)'
// 		and writes 'data (string or buffer)' in it. 
//  	in case of any errors invokes the function 'on_error (referance to a function: mandatory)' with error object as argument;
// 		if no on_error argument provided, prints out the error message;
// NOTE: if file with provided name already exists, function will override the old file.

async function save_file(filepath, data, on_error){
	if (typeof(filepath) != "string") return console.log("Filepath must be a string !");
	if (!filepath || !data) return console.log("arguments: Filepath and Data are mandatory !");
	(await fs.writeFile(filepath, data, (err) =>
		(typeof(on_error) == "function") ? on_error(err) : (err) ? console.error(err.message, "\nFILE NOT SAVED !") : {} ));
};


for (i in ["first", "second", "third"]){
	console.log(i); // i will be indexes of objects inside the array;
}


for (let j of ["first", "second", "third"]){
	console.log(j); // j will be object itself inside the array;
}

