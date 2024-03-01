const express = require('express');
require('dotenv').config();
const cors = require('cors');
const logger = require('morgan');
const app = express();

app.use(cors());
app.use(express.json());

const predefinedFormat =
	':method :url :status :res[content-length] - :response-time ms';
app.use(logger(predefinedFormat));

require('./config/db');

app.get('/', (req, res) => {
	res.send('good to go');
});

app.use('/user', require('./routes/user.route'));

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
