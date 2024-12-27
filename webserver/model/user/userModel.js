const { UserSchema } = require('./userSchema');

const insertUser = async (userObj) => {
    return new Promise((resolve, reject) => {
        console.log("Insert user", userObj);
        UserSchema(userObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
};

const checkDuplicateEmail = async (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("Check duplicate email", email);
            const result = await UserSchema.findOne({ email })
            if (result) {
                resolve(true);
            }
            resolve(false);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

const getUserByEmail = (email) => {
    return new Promise( async (resolve, reject) => {
        if (!email) return false;
        try {
            const user = await UserSchema.findOne({ email })
            resolve(user);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = { insertUser, getUserByEmail, checkDuplicateEmail };
