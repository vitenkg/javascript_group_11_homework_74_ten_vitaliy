const fs = require('fs');

const dateTime = new Date();
const fileName = `../messages/${dateTime.toISOString()}.txt`;

const message = {
   "message": "Hello, world",
   "datetime": dateTime.toISOString(),
};

fs.writeFileSync(fileName, message.message);

console.log('file was saved');