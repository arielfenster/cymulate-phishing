import { Link } from 'react-router-dom';

export function AuthContainer() {
	return (
		<div className='auth-container'>
			<h1>Welcome to the Phishing application. Please login or signup</h1>
			<div className='auth-buttons'>
				<Link to='/signup'> Signup</Link>
				<Link to='/login'> Login</Link>
			</div>
		</div>
	);
}
