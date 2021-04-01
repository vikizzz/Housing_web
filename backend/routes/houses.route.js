const express = require('express');
const router = express.Router();
const Houses = require('../controllers/Houses.controller');

router.get('/all', (req, res) => Houses.get(req, res));

router.get('/:id', (req, res) => Houses.getOne(req, res));

// TODO: get by unit type

router.post('/new', (req, res) => Houses.post(req, res));

router.delete('/:id', (req, res) => Houses.delete(req, res));

router.patch('/:id', (req, res) => Houses.patch(req, res));

module.exports = router;