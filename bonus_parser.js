let axios = require('axios');
let bonus = axios.get('https://54.uz/works.json').then(parser);

function parser(res){
	let i = 0;
	let bonus = 0;
	let data = res.data

	while (data.works[i]){
		bonus = data.works[i].payment.bonus
		if (bonus > 1000){
			console.log(bonus);
			break;
		}
		i++;
	}

	if (!bonus){
		console.log("No bonus with value higher than 1000");
	};
};
//  2 hours earlier I had no idea what axios was. Learnig is my lifelong cowalker.
