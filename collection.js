'use strict';
const bcrypt = require('bcrypt');

class UserCollection {
  constructor(model) {
    this.model = model;
  }

  create(obj) {
    const user = new this.model(obj);
    return bcrypt.hash(user.password,10)
    .then(result => {
      user.password = result;
      return user.save();
    })
  }
}

module.exports = UserCollection;