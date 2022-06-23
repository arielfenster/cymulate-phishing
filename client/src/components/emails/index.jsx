import { useState, useEffect } from 'react';
import apiClient from '../../api/api-client';
import { SendEmailForm } from './email-form';
import { EmailsList } from './emails-list';

export function EmailsDashboard() {
	const [emails, setEmails] = useState([]);

	async function fetchEmails() {
		const emails = await apiClient.getEmails();
		setEmails(emails);
	}

	async function handleFormSubmit(recipient) {
		await apiClient.sendPhishingEmail(recipient);
		await fetchEmails();
	}

	useEffect(() => {
		fetchEmails();
	}, [emails.length]);

	return (
		<div>
			<SendEmailForm onSubmit={handleFormSubmit} />
			<EmailsList emails={emails} />
		</div>
	);
}
