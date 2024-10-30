const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
app.use(express.json());
app.use(session({
  secret: 'super_secret_key',
  resave: false,
  saveUninitialized: true
}));


const userSchema = new mongoose.Schema({
  username: String,
  password: String
});
const User = mongoose.model('User', userSchema);


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).send('Invalid credentials!');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (passwordMatch) {
    req.session.username = username;
    return res.status(200).send('Welcome!');
  } else {
    return res.status(401).send('Invalid credentials!');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
