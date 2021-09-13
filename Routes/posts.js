const express = require('express');
const router = express.Router();
const Post = require('../Models/Posts');

// whenever we want to submit a post.get a post we can use Model that we defined with schemas for it.

// Gets ALL the posts
router.get('/', async(req, res) => {
    const posts = await Post.find();
    res.json(posts)
});

// router.get('/special', (req, res) => {

//     res.send("WE ARE ON special");
// })
// router.get('/1', (req, res) => {

//         res.send("WE ARE ON 1");
//     })
// Submits a Post.Creates a post in the database
router.post('/', async(req, res) => {
    const posts = new Post({
        title: req.body.title,
        description: req.body.description,
    });
    // console.log(posts);
    try {
        const savedPost = await posts.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error });

    }
});

// For getting a specific post
router.get('/:idPost', async(req, res) => {
    try {

        const post = await Post.findById(req.params.idPost);
        res.json(post);
        console.log(post);

    } catch (err) {
        res.json({ message: err });
    }

});

//Delete a post
router.delete('/:id', async(req, res) => {
    const deletedPost = await Post.remove({ _id: req.params.id });
    res.json(deletedPost);
});

//Updates a specific post
router.patch('/:id', async(req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.id }, { $set: { title: req.body.title, description: req.body.description } });
        res.json(updatedPost);
    } catch (error) {
        res.json({ message: error });
    }

})

module.exports = router;