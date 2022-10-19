const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World! using nodemon');
});

app.listen(8000, () => {
	console.log('Server running on port 8000');
	console.log('Press control-C to stop the server');
});
