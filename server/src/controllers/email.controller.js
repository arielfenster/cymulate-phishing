class EmailController {
	#emailService;

	constructor(emailService) {
		this.#emailService = emailService;
	}

	getEmails = async (req, res, next) => {
		try {
			const emails = await this.#emailService.getEmails();
			res.status(200).json(emails);
		} catch (error) {
			res.status(500).json({ error });
		}
	};

	sendEmail = async (req, res, next) => {
		const senderEmail = req.userData.email;
		const { recipient } = req.body;

		try {
			const email = await this.#emailService.sendEmail(senderEmail, recipient);
			res.status(201).json(email);
		} catch (error) {
			res.status(500).json({ error });
		}
	};

	notifyEmailRead = async (req, res, next) => {
		try {
			await this.#emailService.updateEmailStatus(req.params.id);
			res.status(204).send();
		} catch (error) {
			res.status(500).json({ error });
		}
	};
}

module.exports = {
	EmailController,
};
