var http = require('http');
var randomNum = require('./one.js');
var usDol = require('./two.js');
var Account = require('./three.js');

http.createServer(function (req, res) {
  res.writeHead(200);

  res.write(Account.balance() + '\n');

  res.write(Account.money() + '\n');

  res.end();

}).listen(3000);

console.log('Listening on port 3000');
