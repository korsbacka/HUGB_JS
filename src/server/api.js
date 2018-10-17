const express = require("express");
const app = express();
const greeting = require('./greeting');

app.get("/greeting/:name", (req, res) => {
	res.status(200);
	res.send(greeting(req.params.name));
});

module.exports = app;