const validator = require('validator');

function validateInput(username, password) {
    if (!validator.isAlphanumeric(username) || !validator.isLength(password, { min: 8 })) {
        throw new Error('Invalid input');
    }
}
