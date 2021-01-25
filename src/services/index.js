import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://odin.local:8083/v1'
});