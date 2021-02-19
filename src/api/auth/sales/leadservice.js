const axios = require('axios');
import connection from '../../connection.js';
class leadsservice{
	getleads(params){
		return axios.get(`${connection.apiurl}auth/sales/leads${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	leaddata(id,params){
		return axios.get(`${connection.apiurl}auth/sales/leads/get/${id}${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	getbrands()
	{
		return axios.get(`${connection.apiurl}auth/sales/leads/brands?api_token=${localStorage.getItem('bsdapitoken')}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});	
	}
	addlead(apitoken,userobj)
	{
		return axios.post(`${connection.apiurl}auth/sales/leads/create-update?api_token=${apitoken}`,userobj)
		.then(function (response){
			return response.data;
		})
	}
	updatelead(apitoken,id,userobj)
	{
		return axios.post(`${connection.apiurl}auth/sales/leads/create-update/${id}?api_token=${apitoken}`,userobj)
		.then(function (response){
			return response.data;
		})
	}
}
export default new leadsservice();