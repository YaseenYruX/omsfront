const axios = require('axios');
import connection from '../../connection.js';
class quotesservice{
	getquote(id){
		return axios.get(`${connection.apiurl}auth/buh/quote/${id}?api_token=${localStorage.getItem('bsdapitoken')}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	
}
export default new quotesservice();