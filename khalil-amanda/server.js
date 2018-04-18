'use strict';

let express = require('express');
let app = express();

const PORT = process.env.PORT || 3000;

// Direct the browser to index.html
app.use(express.static('./public'));

// Direct to /new.html
app.get('/new', (request, response) => {
  response.sendFile('new.html', {root: './public'});
});

app.post('/articles', express.urlencoded(), (request, response) => {
  console.log(request.body);
  response.status(201).json(request.body);
});

app.use((req, res) => {
  res.status(404).send('Sorry, that route does not exist.');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});