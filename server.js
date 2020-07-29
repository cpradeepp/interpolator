const express = require('express');

const {configureRoute} = require('./route');

// ENV VARS
const PORT = 4001;

const app = express();

// Configure routes
configureRoute(app);
app.use(express.static('src'));

// Starting the server
app.listen(4001, (err) => {
	if(err) {
		console.log('Error in starting the server!!');
		console.log(err);
	} else {
		console.log(`Server running on ${PORT}`);
	}
});