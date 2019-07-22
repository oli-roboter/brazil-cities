const fs = require('fs');
const csvjson = require('csvjson');
const read = fs.createReadStream('./BRAZIL_CITIES.csv');
const write = fs.createWriteStream('brazil-cities.json');
const options = {  delimiter:';'}
const toObject = csvjson.stream.toObject(options);
const stringify = csvjson.stream.stringify();

read.pipe(toObject).pipe(stringify).pipe(write);




