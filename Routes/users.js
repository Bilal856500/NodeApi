const express = require('express');
const user = express.Router();

user.get('/', (req, res) => {
    res.send("WElcome to user");
});

user.get('/user1', (req, res) => {
    res.send("WELCOME TO USER 1");
})

user.get('/user2', (req, res) => {
    res.send("WELCOME TO USER 2");
})

module.exports = user;