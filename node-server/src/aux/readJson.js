const Jeyson = require("./brazil-cities.json");

function read(){
  Jeyson.forEach(item => console.log(item));
}

read();
