var express = require('express');
var app = express();

const sql3 = require('sqlite3');
const { open } = require('sqlite');
const { read } = require('fs');

let resultbd;

(async () => {
    // open the database
    const db = await open({
      filename: 'data-base.db',
      driver: sql3.Database
    })
    resultbd = await db.all('SELECT * FROM dog_params')
})()


app.get('/', function (req, res) {
   console.log(resultbd)
  });

app.listen(3000)
