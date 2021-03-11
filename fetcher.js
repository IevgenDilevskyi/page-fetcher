const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const source = args[0];
const dest = args[1];
// console.log(source, dest);

request(source, (error, response, body) => {
    // if (!error) 
    // console.log(error, response, body);
    fs.writeFile(dest, body, () => {
      console.log(`Downloaded and saved ${body.length} bytes to ${dest}`);
      // if (!error) printOutResult();
        });
});
