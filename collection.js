'use strict';
const bcrypt = require('bcrypt');

class UserCollection {
  constructor(model) {
    this.model = model;
  }

  create(obj) {
    console.log(obj);
    const user = new this.model(obj);
    return bcrypt.hash(user.password,10)
    .then(result => {
      console.log(result)
      user.password = result;
      return user.save();
    })
  }
}

module.exports = UserCollection;