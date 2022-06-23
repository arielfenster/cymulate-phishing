const mongoose = require('mongoose');

async function connectToDatabase() {
	await mongoose.connect(process.env.MONGODB_URL, {
		autoIndex: true,
		auth: {
			username: process.env.MONGODB_USERNAME,
			password: process.env.MONGODB_PASSWORD,
		},
		authSource: process.env.MONGODB_AUTH_SOURCE,
	});

	console.log('Connected to mongodb');
}

module.exports = { connectToDatabase };
