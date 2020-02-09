const express = require('express');
const userController = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/register', asyncHandler(insert));
router.post('/login', asyncHandler(getUserByEmailIdAndPassword));


async function insert(req, res, next) {
    const user = req.body;
    console.log(`registering user`, user);
    const saveuser = await userController.insert(user);
    res.json(saveuser);
}

async function getUserByEmailIdAndPassword(res, req, next) {
    const user = req.body;
    console.log('searching for data', user);

    const saveuser = await userController.getUserByEmailIdAndPassword(user.email, user.password);
    res.json(saveuser);
}
module.exports = router;