const mongoose = require('mongoose');
const Houses = require('../models/House.model');
const Posts = require('../models/Post.model');
const Comments = require('../models/Comment.model');


const HousesController = {};

//GET: find and send all House documents
//     find specific ones if there are attributes specified
HousesController.get = (req, res) => {
    Houses.find(req.query)
        .then(r => res.send(r))
        .catch(e => res.status(500).send('GET error in Houses: ' + e));
};

//GET: find and send one House document by ID
HousesController.getOne = (req, res) => {
    Houses.findById(req.params.id)
        .then(r => res.send(r))
        .catch(e => res.status(500).send('GET error in Houses: ' + e));
};

//GET: find and send 4 most popular House documents
HousesController.getHotFour = (req, res) => {
    Houses.find().limit(4)
        .then(r => res.send(r))
        .catch(e => res.status(500).send('GET error in Houses: ' + e));
};

//POST: save and send the new document input
HousesController.post = (req, res) => {
    const newHouse = new Houses(req.body);
    newHouse.save()
        .then(r => res.send(r))
        .catch(e => res.status(500).send('POST error in Houses: ' + e));
};

//POST: find house by ID and add a post below
HousesController.newPost = (req, res) => {
    const newPost = new Posts(req.body);
    newPost.save()
        .then(r => res.send(r))
        .catch(e => res.status(500).send('POST error in Houses: ' + e));
};

// TODO!
//POST: find post by ID and add a comment below
HousesController.newComment = (req, res) => {
    const newComment = new Comments(req.body);
    Houses.updateOne({_id: req.params.id, "posts._id": req.query.postId}, 
        {$push: {"posts.$.comments": newComment}})
        .then(r => res.send(r))
        .catch(e => res.status(500).send('POST error in Houses: ' + e));
};

//DELETE: find and delete Houses document by ID
HousesController.delete = (req, res) => {
    Houses.findOneAndDelete(Houses.findById(req.params.id))
        .then(r => res.send(r))
        .catch(e => res.status(500).send('DELETE error in Houses: ' + e));
};

//PATCH: find and change properties of Houses document by ID
HousesController.patch = (req, res) => {
    Houses.findById(req.params.id)
        .then(r => {
                Object.keys(req.body).forEach((key, i) => {
                    r[key] = req.body[key];
                });
                r.save();
            })
        .then(r => res.send(r))
        .catch(e => res.status(500).send('PATCH error in Houses: ' + e));
};

module.exports = HousesController;