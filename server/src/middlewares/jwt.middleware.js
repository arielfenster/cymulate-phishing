const jwt = require('jsonwebtoken');

function jwtMiddleware(req, res, next) {
	const authHeader = req.headers.authorization;
	const token = authHeader?.split(' ')[1];

	if (!token) {
		return res.status(403).send('Missing authorization header');
	}

	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		req.userData = payload;

		next();
	} catch (error) {
		return res.status(403).send('Invalid auth token');
	}
}

module.exports = { jwtMiddleware };
