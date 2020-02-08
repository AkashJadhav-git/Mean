users = [];

async function insert(user){

// make a mongoose db call to save user in db

    console.log(`saving user to DB`, user);
    users.push(user);
    return user;
}

module.exports = {
    insert
}