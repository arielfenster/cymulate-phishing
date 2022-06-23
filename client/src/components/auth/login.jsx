import { useState } from 'react';
import apiClient from '../../api/api-client';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	async function handleLogin(event) {
		event.preventDefault();

		await apiClient.login(email, password);
		navigate('/emails');
	}

	return (
		<div>
			<form onSubmit={handleLogin}>
				<div>
					<label> Email </label>
					<input type='email' onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<label> Password </label>
					<input type='password' onChange={(e) => setPassword(e.target.value)} />
				</div>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}
