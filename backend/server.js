const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const colors = require('colors');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/drugs', require('./routes/drudRoutes'));



app.listen(port, err => {
	if (err)
		throw err
	console.log('Server listening on port'.yellow, port.green)
})