const mongoose = require('mongoose');
const Houses = require('../models/House.model');


const HousesController = {};

//GET: find and send all House documents
HousesController.get = (req, res) => {
    Houses.find()
        .then(r => res.send(r))
        .catch(e => res.status(500).send('GET error in Houses: ' + e));
};

//GET: find and send all House documents
HousesController.getOne = (req, res) => {
    Houses.findById(req.params.id)
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