const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = async (plainPwd) => {
    return new Promise((resolve, reject) => {
        const hashedPwd = bcrypt.hashSync(plainPwd, saltRounds);
        resolve(hashedPwd);
    });
}

const comparePassword = async (plainPwd, hashedPwd) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainPwd, hashedPwd, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports = { hashPassword, comparePassword };
