const axios = require('axios');
import connection from '../../connection.js';
class leadsservice{

	
	getbrands(){
		return axios.get(`${connection.apiurl}auth/admin/lead/fetch-brands?api_token=${localStorage.getItem('bsdapitoken')}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	getsalesperson(){
		return axios.get(`${connection.apiurl}auth/admin/lead/fetch-salesperson?api_token=${localStorage.getItem('bsdapitoken')}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	addlead(apitoken,userobj)
	{
		return axios.post(`${connection.apiurl}leads/create-update?api_token=${apitoken}`,userobj)
		.then(function (response){
			return response.data;
		})
	}
	updatelead(apitoken,id,userobj)
	{
		return axios.post(`${connection.apiurl}leads/create-update/${id}?api_token=${apitoken}`,userobj)
		.then(function (response){
			return response.data;
		})
	}
}
export default new leadsservice();