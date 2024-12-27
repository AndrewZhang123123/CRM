const express = require('express');
const router = express.Router();
const { insertUser, checkDuplicateEmail, getUserByEmail } = require('../model/user/userModel');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');

//API: Create a new user
router.post('/', async (req, res, next) => {
    const { name, email, password, company, address, phone } = req.body;
    try{
        const isDuplicate = await checkDuplicateEmail(email);
        if (isDuplicate) {
            console.log("Email already exists");
            res.status(400);
            return res.json({
                status: 400,
                message: 'Email already exists'
            });
        }
        const hashedPassword = await hashPassword(password);
        const user = { name, email, password: hashedPassword, company, address, phone };
        const result = await insertUser(user);
        console.log("Create user successfully", result);
        res.json({
            status: 200,
            message: 'User created successfully',
            body: result
        });
    } catch (error) {
        console.log(error);
        res
    }
});

//API: User Login
router.post('/login', (req, res, next) => {
    return new Promise( async (resolve, reject) => {
        const { email, password } = req.body;
        const user = await getUserByEmail(email);
        if (!user) {
            console.log("User not found");
            res.status(404);
            return res.json({
                status: "Error",
                message: 'User not found'
            });
        }
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            console.log("Invalid password");
            res.status(401);
            return res.json({
                status: 401,
                message: 'Invalid password'
            });
        }
        res.json({
            status: 200,
            message: 'User logged in',
            body: user
        });
    });
});

module.exports = router;
