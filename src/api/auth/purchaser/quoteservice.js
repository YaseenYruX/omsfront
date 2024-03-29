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
	getbrands(params)
	{
		return axios.get(`${connection.apiurl}auth/purchaser/quotes/brands${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});	
	}
	getitembrand(){
		return axios.get(`${connection.apiurl}auth/purchaser/quotes/itembrand?api_token=${localStorage.getItem('bsdapitoken')}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	answered(id,api_token,user_obj)
	{
		return axios.post(`${connection.apiurl}auth/purchaser/quotes/answered/${id}?api_token=${api_token}`,user_obj)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	getconditions(params)
	{
		return axios.get(`${connection.apiurl}auth/purchaser/quotes/conditions${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});	
	}
}
export default new quoteservice();