import express from "express";
const app = express();
const port = 3000;


app.get('/', (req, res) => {
	res.send('Welcome to the Plumbing of the Kitchen Sink!');
});




app.listen(port, () => {
	console.log(`Express listening at http://localhost:${port}`);
});