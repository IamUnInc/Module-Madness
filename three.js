var randomNum = require('./one.js');
var usDol = require('./two.js');

var account = {
balance: function () {
  return 'Account balance:';
},

money: function() {
  return usDol(randomNum());
},
};
module.exports = account;
