'use strict';

const model = require('./auth/users.js');

function basicAuthentication(req,res,next) {
  return model.basicAuth(req.body.username,req.body.password)
  .then( result => {
    isValid(result);
  })
  function isValid(username) {
    if(username) {
      req.body.password = username.password;
      req.body.token = model.token(username.name);
      next();
    } else {
      next('not a valid user')
    }
  }
}

module.exports = basicAuthentication;