const axios = require('axios');
import connection from '../../connection.js';
class quoteservice{
	getquotes(id,params){
		return axios.get(`${connection.apiurl}auth/buh/quote/${id}${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}

}
export default new quoteservice();