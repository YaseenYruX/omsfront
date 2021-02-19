const axios = require('axios');
import connection from '../../connection.js';
class usersservice{
	getlist(params){
		return axios.get(`${connection.apiurl}auth/admin/users${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	getbrands()
	{
		return axios.get(`${connection.apiurl}brands`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	getsummary(params){
		return axios.get(`${connection.apiurl}auth/admin/users-summary${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	deleteuser({query,id}){
		return axios.delete(`${connection.apiurl}auth/admin/user/${id}${query}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	adduser(apitoken,userobj)
	{
		return axios.post(`${connection.apiurl}auth/admin/user-cu?api_token=${apitoken}`,userobj)
		.then(function (response){
			return response.data;
		})
	}
}
export default new usersservice();