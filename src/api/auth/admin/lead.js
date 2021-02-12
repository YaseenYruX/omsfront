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
}
export default new leadsservice();