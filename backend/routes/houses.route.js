const express = require('express');
const router = express.Router();
const Houses = require('../controllers/Houses.controller');

// Search for specific attribute: /all?<attribute>=<value>
router.get('/all', (req, res) => Houses.get(req, res));     // get all houses, or search by attribute

router.get('/hot', (req, res) => Houses.getHotFour(req, res));      // get 4 most popular houses (most posts)

router.get('/:id', (req, res) => Houses.getOne(req, res));  // get one house by id

router.post('/new', (req, res) => Houses.post(req, res));   // post a new house

/*
TODO: figuring out data modeling...

router.post('/:id/newPost', (req, res) => Houses.newPost(req, res));    // post a new post
// what about new comments?
router.post('/:id/newComment', (req, res) => Houses.newComment(req, res));  // post a new comment
*/

router.delete('/:id', (req, res) => Houses.delete(req, res));   // delete a house

router.patch('/:id', (req, res) => Houses.patch(req, res));     // change data of a house

module.exports = router;