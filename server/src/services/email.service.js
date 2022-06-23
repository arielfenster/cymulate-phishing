const nodemailer = require('nodemailer');

class EmailService {
	#emailModel;
	#usersModel;
	#transporter;

	constructor(emailModel, usersModel) {
		this.#emailModel = emailModel;
		this.#usersModel = usersModel;

		this.#transporter = nodemailer.createTransport({
			host: 'gmail',
			auth: {
				user: 'arielfenster1610@gmail.com',
				pass: 'fashizelmanizel2',
			},
		});
	}

	getEmails = async () => {
		return this.#emailModel.find().populate({
			path: 'from',
			select: 'email -_id',
		});
	};

	sendEmail = async (fromEmail, toEmail) => {
		const user = await this.#usersModel.findOne({ email: fromEmail });

		const title = 'Congratulations! You just won a prize';
		const content = 'This is your lucky day';

		const email = await this.#emailModel.create({ from: user.id, to: toEmail, title, content });

		await this.#internalSendEmail(email);
	};

	#internalSendEmail = async (email) => {
		await this.#transporter.sendMail({
			from: email.from,
			to: email.to,
			subject: email.title,
			html: `<h2> ${email.content}. Click the link to claim your reward: </h2>
			<form method="post" action="http://localhost:5000/api/email/${email.id}">
				<button type="submit"> Reward! </button>
			</form>
			`,
		});
	};

	updateEmailStatus = async (emailId) => {
		return this.#emailModel.findByIdAndUpdate(emailId, {
			$set: {
				status: 'CLICKED',
			},
		});
	};
}

module.exports = { EmailService };
