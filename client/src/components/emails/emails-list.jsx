export function EmailsList({ emails }) {
	function getStatusColor(status) {
		return status === 'SENT' ? 'green' : ' red';
	}

	return (
		<div>
			<ul>
				{emails.map((email) => (
					<div key={email._id} style={{ border: '1px solid black' }}>
						<h3>Email title: {email.title}</h3>
						<h4>Send date: {email.createdAt}</h4>

						<span> From: {email.from.email}</span>
						<br />
						<span> To: {email.to}</span>

						{email.status === 'CLICKED' && <h4>Link clicked date: {email.updatedAt}</h4>}
						<br />
						<span style={{ backgroundColor: getStatusColor(email.status), color: 'white' }}>
							Status: {email.status}
						</span>
					</div>
				))}
			</ul>
		</div>
	);
}
