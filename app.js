var express = require('express');
var request = require('supertest');
var app = express();

app.get('/', function (req, res) {
  res.send(new Date());
});

app.get('/convert/:currency/:value', function (req, res) {
    var curr=req.params.currency;
    var value=req.params.value;
    var result=0;
    if(curr=="INR")
    {
      result= value/68.10;
    }
    res.send({value: result});
});

app.listen(3000, function () {
  console.log('Test app listening on port 3000!')
});



//tests

request(app)
  .get('/')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
});