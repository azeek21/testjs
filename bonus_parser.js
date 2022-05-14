let axios = require('axios');
let res = axios.get('https://54.uz/works.json').then(parser);

function parser(res){
	let i = 0;
	let bonus = 0;

	data = res.data
	while (data.works[i]){
		bonus = data.works[i].payment.bonus
		if (bonus > 1000){	
			console.log(data.works[i].payment.bonus)
			break
		}
		i++;
	}
};