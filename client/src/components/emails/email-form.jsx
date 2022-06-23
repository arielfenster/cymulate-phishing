import { useState } from 'react';

export function SendEmailForm({ onSubmit }) {
	const [recipient, setRecipient] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		onSubmit(recipient);
		setRecipient('');
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label> Recipient email</label>
					<input type='text' onChange={(e) => setRecipient(e.target.value)} />
				</div>
				<button type='submit'> Send phishing email </button>
			</form>
		</div>
	);
}
