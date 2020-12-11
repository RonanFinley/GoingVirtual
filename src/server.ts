import Express from 'express';
import path from 'path';
import ejs from 'ejs';

const app = Express()
const port = 3000;

app.set('view engine', 'ejd')

app.use(Express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
})