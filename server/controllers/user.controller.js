const bcrypt = require('bcrypt');
const User = require('../models/user.model');

async function insert(user){

    user.hashedPassword = bcrypt.hashSync(user.password, 10);
    delete user.password;

// make a mongoose db call to save user in db
    console.log(`saving user to DB`, user);
    return await new User(user).save();
    
}

module.exports = {
    insert
};