'use strict';

const model = require('./auth/users.js');
const base64 = require('base-64');
const jwt = require('jsonwebtoken');

// function basicAuthentication(req,res,next) {
//   return model.basicAuth(req.body.username,req.body.password)
//   .then( result => {
//     isValid(result);
//   })
//   function isValid(username) {
//     if(username) {
//       req.body.password = username.password;
//       req.body.token = model.token(username.name);
//       next();
//     } else {
//       next('not a valid user')
//     }
//   }
// }

//module.exports = basicAuthentication;

module.exports = {
  basic: async (req, res, next) => {
    console.log(req.headers)
    if (req.headers.authorization) {

      const encodedPass = req.headers.authorization.split(' ')[1];
      const decodedPass = base64.decode(encodedPass);
      const [user, pass] = decodedPass.split(':');

      return model.basicAuth(user, pass)
      .then(results => {
        console.log( `this is the result ${results}`)
        if(results) {
          req.body.token = model.token(results.username)
          next();
        }
        else {
          next('user not valid');
        }
      })

    } else {
      next('Unautorized');
    }

  }

}