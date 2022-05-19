let axios = require('axios'); // 0.27.2
const url = "https://54.uz/works.json";

// Accepts url as a string and prints firs bonus value higher than 1000.
//	 In case of error prints error object provided by Promise object
// 		or invokes on_error function (if provided) with argimument of error object prvided by Promise.

function bonus_parser(url, on_error){
	if (typeof(url) != "string")
		console.log("Url must be type of string !");

	axios.get(url).then(
		(res) => {
			
			for (let work of res.data.works){
				if (work.payment.bonus > 1000){
					console.log(work.payment.bonus);
					return ;
				};
			};

			console.log("No bonus higher than 1000 !");
		},

		(err) => {(typeof(on_error) == "function") ? on_error(err): console.log(err);}
	);
	};


// Simpler version of bonus_parser()
async function bonus_parser2(url, on_error){
	let response = await axios.get(url).catch((err) => { (typeof(on_error) == "function") ? on_error(err) : console.log(err) });
	
	if (!response) return;

	for (let work of response.data.works){
		if (work.payment.bonus > 1000){
			console.log(work.payment.bonus);
			return ;
		};
	};

	console.log("No bonus higher than 1000 !");
};

bonus_parser(url, (err) => {console.error("Something went wrong !\nRemove me to see full info !")});
// bonus_parser2(url)  // works same as bonus_parser()

