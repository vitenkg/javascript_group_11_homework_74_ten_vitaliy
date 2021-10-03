const express = require('express');
const router = express.Router();
// const fileDB = require('../fileDB');

router.get('/', (req, res) => {
   const products = res.send('List of messages will be here');
});


module.export = router;