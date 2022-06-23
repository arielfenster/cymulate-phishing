const bcrypt = require('bcrypt');

class UserService {
	#userModel;

	constructor(userModel) {
		this.#userModel = userModel;
	}

	createUser = async (email, password) => {
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(password, salt);

		return await this.#userModel.create({ email, password: hashedPassword });
	};

	loginUser = async (email, password) => {
		const user = await this.#userModel.findOne({ email });

		if (!user) {
			throw new Error(`Email '${email}' doesn't exist`); // TODO: replace with return false
		}

		const arePasswordsMatching = await bcrypt.compare(password, user.password);

		if (!arePasswordsMatching) {
			throw new Error('Wrong password'); // TODO: replace with return false
		}

		return user;
	};

	findUser = async (email) => {
		return await this.#userModel.findOne({ email });
	};
}

module.exports = { UserService };
