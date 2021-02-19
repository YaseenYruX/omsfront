const axios = require('axios');
import connection from '../../connection.js';
class quoteservice{
	getquotes(params){
		return axios.get(`${connection.apiurl}auth/sales/quotes${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	allleads(){
		return axios.get(`${connection.apiurl}auth/sales/leads?api_token=${localStorage.getItem('bsdapitoken')}`)
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
	getlead(id){
		return axios.get(`${connection.apiurl}leads/get/${id}?api_token=${localStorage.getItem('bsdapitoken')}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	getquote(id){
		return axios.get(`${connection.apiurl}auth/sales/quotes/get/${id}?api_token=${localStorage.getItem('bsdapitoken')}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	// leaddata(id,params){
	// 	return axios.get(`${connection.apiurl}auth/sales/leads/get/${id}${params}`)
	// 	.then(function (response) {
	// 		return response.data;
	// 	})
	// 	.catch(function (error) {
	// 		return error;
	// 	});
	// }
	// getbrands()
	// {
	// 	return axios.get(`${connection.apiurl}auth/sales/leads/brands?api_token=${localStorage.getItem('bsdapitoken')}`)
	// 	.then(function (response) {
	// 		return response.data;
	// 	})
	// 	.catch(function (error) {
	// 		return error;
	// 	});	
	// }
	// addlead(apitoken,userobj)
	// {
	// 	return axios.post(`${connection.apiurl}auth/sales/leads/create-update?api_token=${apitoken}`,userobj)
	// 	.then(function (response){
	// 		return response.data;
	// 	})
	// }
	// updatelead(apitoken,id,userobj)
	// {
	// 	return axios.post(`${connection.apiurl}auth/sales/leads/create-update/${id}?api_token=${apitoken}`,userobj)
	// 	.then(function (response){
	// 		return response.data;
	// 	})
	// }
}
export default new quoteservice();