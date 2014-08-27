module.exports = function(app) {
  var express = require('express');
  var testRouter = express.Router();
  testRouter.get('/', function(req, res) {
    res.send({test:[]});
  });
  app.use('/api/test', testRouter);
};
