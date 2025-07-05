const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.status(200).send('Hello!you are lucky');
});
const port = 8080

app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});