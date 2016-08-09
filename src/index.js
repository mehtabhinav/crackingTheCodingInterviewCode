var Sec1 = require('./Sec1ArraysAndStrings');

var indexContents = {
  "s1q1": "curl -i GET http://localhost:3000/code/1/1",
  "s1q2": "curl -i GET http://localhost:3000/code/1/2",
  "s1q3": "curl -i GET http://localhost:3000/code/1/3"
};

exports.ping = function(req, res) {
  res.json(200, {"status": "Success"});
};

exports.summaryIndex = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.json(200, indexContents);
};

exports.sort = function(req, res) {
  console.log('req is: '+req.query.inputString);
  if (req.params.sec == 1)
  {
    if (req.params.ques == 1) {
      Sec1.q1(req.query.inputString, function(response){
        res.json(200, response);
      });
    }
    if (req.params.ques == 2) {
      Sec1.q2(function(response){
        res.json(200, response);
      });
    }
    if (req.params.ques == 3) {
      Sec1.q3(function(response){
        res.json(200, response);
      });
    }
  }
  else
  {
    res.json(500, {'status': 'code not found'});
  }
};
