const bcrypt = require('bcrypt');

async function registerUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = {
        username: username,
        password: hashedPassword,
    };
    console.log('User registered:', userData);
}
