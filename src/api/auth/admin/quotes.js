const axios = require('axios');
import connection from '../../connection.js';
class quotesservice{

	allleads(){
		return axios.get(`${connection.apiurl}leads?api_token=${localStorage.getItem('bsdapitoken')}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	getlead(id){
		return axios.get(`${connection.apiurl}leads/get/${id}?api_token=${localStorage.getItem('bsdapitoken')}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	getconditions(){
		return axios.get(`${connection.apiurl}mflag/conditions?api_token=${localStorage.getItem('bsdapitoken')}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	getbrands(){
		return axios.get(`${connection.apiurl}brands?api_token=${localStorage.getItem('bsdapitoken')}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	
	
}
export default new quotesservice();