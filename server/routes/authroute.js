const express = require('express');
const userController = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.post('/register', asyncHandler(insert));

async function insert(req, res, next){
    const user = req.bodyParser;
    console.log(`registering user`, user);
    const saveuser = userController.insert(user);
    res.json(saveuser);
}

module.exports = router;