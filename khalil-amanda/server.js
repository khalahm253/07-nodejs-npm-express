'use strict';

let express = require('express');
let app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/new', (request, response) => {
  console.log('in new')
  response.sendFile('new.html', {root: './public'});
});

app.post('/articles', express.urlencoded(), (request, response) => {
  console.log(request.body);
  response.status(201).json(request.body);
});

app.use((req, res) => {
  console.log('no file')
  res.status(404).send('Sorry, that route does not exist.');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});