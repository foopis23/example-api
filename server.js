const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Goodbye Everyone!');
});

app.post('/login', (req, res) => {
	// todo: add login logic
	res.send('Login successful!');
});

app.listen(port, () => {
	console.log(`Example API listening at http://localhost:${port}`);
});
