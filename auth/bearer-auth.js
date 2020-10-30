'use strict';

const base64 = require('base-64');
const Users = require('./users.js');
const jwt = require('jsonwebtoken');

module.exports = {

  bearer: async (req,res,next) => {
    if(req.headers.authorization) {
      const encodedToken = req.headers.authorization.split(' ')[1];

      try {
        let isValidToken = await jwt.verify(encodedToken, 'SECRET_STRING');
        console.log(isValidToken);
        if(isValidToken) {
          let user = await Users.findOne({ username: isValidToken.username });
          req.username = user;
          console.log(user)
        }
        next();
      } catch (e) {
        next(e);
      }

    } else {
      next('unauthorized')
    }
  }
}