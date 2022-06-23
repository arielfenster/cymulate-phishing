require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./database/connect');
const { baseRouter } = require('./routes');

async function run() {
	await connectToDatabase();

	const app = express();
	app.use(cors());
	app.use(express.json());
	app.use('/api', baseRouter);

	const port = process.env.PORT || 5000;

	app.listen(port, () => {
		console.log(`Server is running on http://localhost:${port}`);
	});
}

run();
