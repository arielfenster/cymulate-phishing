import { Routes, Route } from 'react-router-dom';
import { AuthContainer } from './components/auth/container';
import './App.css';
import { LoginForm } from './components/auth/login';
import { SignupForm } from './components/auth/signup';
import { EmailsDashboard } from './components/emails';

function App() {
	return (
		<Routes>
			<Route path='/auth' element={<AuthContainer />} />
			<Route path='/login' element={<LoginForm />} />
			<Route path='/signup' element={<SignupForm />} />
			<Route path='/emails' element={<EmailsDashboard />} />
		</Routes>
	);
}

export default App;
