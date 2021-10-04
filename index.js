const express = require('express');
const messages = require('./app/messages');
const fileDB = require('./files/fsFiles');


const app = express();
app.use(express.json());
app.use('/messages', messages);
const port = 8000;


fileDB.init();
app.listen(port, () => {
   console.log(`Server Started on ${port} port`);
})