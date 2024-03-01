const mongoose = require('mongoose');

const dbConfig = {
	url: process.env.MONGODB_URL,
};

mongoose
	.connect(dbConfig.url, dbConfig.options)
	.then(() => {
		console.log('Successfully connected to the database');
	})
	.catch((err) => {
		console.log('Could not connect to the database.', err);
	});
