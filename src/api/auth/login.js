const axios = require('axios');
import connection from '../connection.js';
class loginservice{
	dologin(email,pass){
		return axios.post(`${connection.apiurl}auth/login`, {
			email: email,
			password: pass
		})
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	getuser(token){
		return axios.get(`${connection.apiurl}user?api_token=${token}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	getuserbrands(token){
		return axios.get(`${connection.apiurl}auth/my-brands?api_token=${token}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
}

export default new loginservice();