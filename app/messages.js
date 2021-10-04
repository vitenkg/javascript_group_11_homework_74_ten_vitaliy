const express = require('express');
const router = express.Router();
const fileDB = require('../files/fsFiles');

router.get('/', (req, res) => {
   fileDB.getFiles();
   res.send(`вернул файлы`);
});

router.get('/:id', (req, res) => {
   res.send('A single product by id will be here');
});

router.post('/', (req, res) => {
   const data = fileDB.addFile();
   console.log('добаление данных', data);
   res.send(`Will create new file here ${data}`);
});

module.exports = router;



