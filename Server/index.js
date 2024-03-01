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
app.use('/patient_query', require('./routes/patient_query.route'));
app.use('/gpt_response', require('./routes/gpt_analysis.route'));
app.use('/medical_history', require('./routes/medical_history.route'));
app.use('/life_style', require('./routes/life_style.route'));

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
