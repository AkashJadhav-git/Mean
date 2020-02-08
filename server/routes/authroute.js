const express = require('express');
const userController = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.post('/register', asyncHandler(insert));

async function insert(req, res, next){
    const user = req.body;
    console.log(`registering user`, user);
    const saveuser = await userController.insert(user);
    res.json(saveuser);
}

module.exports = router;