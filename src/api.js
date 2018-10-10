const greeting = require('./greeting');
const express = require("express");
const app = express();


app.get('./greeting/:name', (req, res) => {
	res.status(200);
	res.send(req.params.name);
});

module.exports = app;