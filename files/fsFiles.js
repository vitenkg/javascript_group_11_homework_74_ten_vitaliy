const fs = require('fs');

const dateTime = new Date();
const path = './messages';
let data = [];

module.exports = {
   init() {
      try {
         fs.readdirSync(path, (err, files) => {
            files.forEach(file => {
               console.log('init: ' + path + '/' + file);
               data.push(file);
            });
         })
      } catch (e) {
         data = [];
      }
   },
   getFiles() {
      console.log('get files', data);
      return data;
   },
   addFile() {
      const fileName = `./messages/${dateTime.toISOString()}.txt`;
      const message = {
         "message": "Hello, world",
         "datetime": dateTime.toISOString(),
      };
      fs.writeFileSync(fileName, JSON.stringify(message));
      console.log('file was saved');
      console.log('Add file', message);
      return message;
   }
};

