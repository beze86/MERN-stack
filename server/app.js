const express = require('express')
const app = express();
const mongoConnect = require('./db').mongoConnect;

const dotenv = require('dotenv');
dotenv.config();

const router = require('./router');


app.use('/', router);

app.use((req, res, next) => {
    res.json('error');
})


mongoConnect(() => {
	let port = process.env.PORT;
	if (port == null || port == "") {
  		port = 3003;
	}
	app.listen(port);
})