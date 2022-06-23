class UserController {
	#userService;
	#jwtService;

	constructor(userService, jwtService) {
		this.#userService = userService;
		this.#jwtService = jwtService;
	}

	signup = async (req, res, next) => {
		const { email, password } = req.body;

		try {
			const user = await this.#userService.createUser(email, password);
			const token = this.#jwtService.createJwtToken(user);

			res.status(201).json({ token });
		} catch (error) {
			res.status(403).json({ error: error.message });
		}
	};

	login = async (req, res, next) => {
		const { email, password } = req.body;

		try {
			const user = await this.#userService.loginUser(email, password);
			const token = this.#jwtService.createJwtToken(user);

			res.status(200).json({ token });
		} catch (error) {
			res.status(403).json({ error: error.message });
		}
	};
}

module.exports = { UserController };
