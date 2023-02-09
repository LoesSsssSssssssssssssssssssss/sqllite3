"use strict";

var express = require('express');

var app = express();

var sql3 = require('sqlite3');

var _require = require('sqlite'),
    open = _require.open;

var _require2 = require('fs'),
    read = _require2.read;

var resultbd;

(function _callee() {
  var db;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(open({
            filename: 'data-base.db',
            driver: sql3.Database
          }));

        case 2:
          db = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(db.get('SELECT * FROM dog_params'));

        case 5:
          resultbd = _context.sent;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
})();

app.get('/', function (req, res) {
  console.log(resultbd);
});
app.listen(3000);