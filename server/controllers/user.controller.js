const bcrypt = require('bcrypt');
const User = require('../models/user.model');

async function insert(user){

    user.hashedPassword = bcrypt.hashSync(user.password, 10);
    delete user.password;

    // make a mongoose db call to save user in db
    console.log(`saving user to DB`, user);
    return await new User(user).save();
    
}
async function  getUserByEmailIdAndPassword (email, password){
    const user = await user.findMany({email});
    if(isUserValid(user, password, user.hashedPassword)){
        user = user.toObject();
        delete user.hashedPassword;
        return user;
    }else{
        return null;
    }
}

function isUserValid(user, password, hashedPassword){
    return user && bcrypt.compareSync(password, hashedPassword);
}
module.exports = {
    insert,
    getUserByEmailIdAndPassword
};