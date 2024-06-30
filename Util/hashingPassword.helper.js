const bcrypt = require("bcrypt");


class HashingPassword {
    static hashPassword = (password) => {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        return hashedPassword;
    };

    static comparePassword = (password, hashedPassword) => {
        const isMatch = bcrypt.compareSync(password, hashedPassword);
        return isMatch;
    };

   
}
module.exports = HashingPassword