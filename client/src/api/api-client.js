import axios from 'axios';

const LOCAL_STORAGE_KEY = 'cymulate-token';

class ApiClient {
	#client;

	constructor() {
		this.#client = axios.create({
			baseURL: 'http://localhost:5000/api',
		});
	}

	#getRequestHeaders = () => {
		return {
			Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY)}`,
		};
	};

	signup = async (email, password) => {
		const response = await this.#client.post('/user/signup', { email, password });
		localStorage.setItem(LOCAL_STORAGE_KEY, response.data.token);

		return response.data;
	};

	login = async (email, password) => {
		const response = await this.#client.post('/user/login', { email, password });
		localStorage.setItem(LOCAL_STORAGE_KEY, response.data.token);

		return response.data;
	};

	getEmails = async () => {
		const response = await this.#client.get('/email', {
			headers: this.#getRequestHeaders(),
		});
		return response.data;
	};

	sendPhishingEmail = async (recipient) => {
		const response = await this.#client.post(
			'/email',
			{ recipient },
			{
				headers: this.#getRequestHeaders(),
			},
		);
		return response.data;
	};

	updateEmailStatus = async (emailId) => {
		const response = await this.#client.patch(`/email/${emailId}`, null, {
			headers: this.#getRequestHeaders(),
		});
		return response.data;
	};
}

export default new ApiClient();
