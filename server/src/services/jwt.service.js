const jwt = require('jsonwebtoken');

class JwtService {
	createJwtToken(user) {
		const payload = {
			email: user.email,
			id: user.id,
		};

		return jwt.sign(payload, process.env.JWT_SECRET, { noTimestamp: false, expiresIn: '1h' });
	}
}

module.exports = { JwtService };
