import axios from 'axios';

const api = axios.create({
	baseURL : process.env.REACT_APP_BASE_URL || 'https://auth-poke.herokuapp.com'
})

export default api;