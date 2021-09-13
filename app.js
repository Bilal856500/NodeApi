const express = require('express');
const bodyParse = require('body-parser');
const app = express();
app.use(bodyParse.json());
const mongoose = require('mongoose');
require('dotenv/config');
const postRoutes = require('./Routes/posts');

// const userRoutes = require('./Routes/users');
// app.use('/users', userRoutes);
//app.use is a middleware.It is used to get all the routes from a file.
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to First Api");
})

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected to DB");
})
app.listen(5000);