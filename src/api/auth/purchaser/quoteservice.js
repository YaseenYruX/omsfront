const axios = require('axios');
import connection from '../../connection.js';
class quoteservice{
	getunasweredquotes(params){
		return axios.get(`${connection.apiurl}auth/purchaser/quotes/unanswered${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	getquote(id,params)
	{
		return axios.get(`${connection.apiurl}auth/purchaser/quotes/get/${id}${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
}
export default new quoteservice();