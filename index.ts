const express = require('express');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req: any, res: any) => {
  res.render('pages/index.ejs');
});

app.get('/login', (req: any, res: any) => {
  res.render('pages/login.ejs');
});

app.get('/signup', (req: any, res: any) => {
  res.render('pages/signup.ejs');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});