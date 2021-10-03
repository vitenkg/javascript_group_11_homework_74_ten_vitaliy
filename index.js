const express = require('express');
const messages = require('./app/messages');
// const fileDB = require('./fileDB');

const app = express();
app.use(express.json());
app.use('/messages', messages);
const port = 8000;

app.listen(port, () => {
   console.log(`Server Started on ${port} port`);
})