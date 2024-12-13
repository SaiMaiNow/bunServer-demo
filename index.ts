const express = require('express');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req: any, res: any) => {
  res.render('pages/index.ejs');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});