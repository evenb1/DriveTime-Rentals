const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: {model: 'corolla'},
  headers: {
    'x-rapidapi-key': '6f8b752166mshd72cbd3229f278ap139b64jsna99ee7e78f37',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}