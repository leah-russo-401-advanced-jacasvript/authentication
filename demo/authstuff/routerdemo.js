// which auth features do we need to access from a route?

//need post for singin and signup

// const express = require('express');
// const usersSchema = require('./users-schema');

// const router = express.Router();

// router.post('/signin', (req,res,next) => {

//   if(req.headers.authorization) {
    //do specific signin stuff if these headers exist
    //need to compare the password from the header to the one in the databse
    //remember that the password int he database in excrypted while the passwor din the header is not
    // need bcrypt to compare original pass ind atabase to pass sent in header

//     const encodedPass = req.header.authorization.split( ' ')[1];
//     const decodedPass = base64.decode(encodedPassword)
//     const [user,pass]
//   } 

//   res.status(401).send('hey, give me my auth headers')
// })

// router.post('/signup', (req,res,next) => {
//     const userData = new usersSchema
// })

// module.exports = router;