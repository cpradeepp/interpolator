const configureRoute = (app) => {
	app.get('/', (req, res) => {
		res.sendFile(`${__dirname}/src/index.html`);
	});
}

module.exports = {
	configureRoute
}