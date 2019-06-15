const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
  //Returns just the name and _id of all breeds
  db.Breed.find({}, 'name').then(breeds => res.json(breeds));
});

router.get('/:id', (req, res) => {
  //Returns one breed and populates just the name of each cats of that breed
  db.Breed.findOne({ _id: req.params.id })
    .populate('catId', 'name')
    .then(cat => res.json(cat));
});

router.post('/', (req, res) => {
  //Posts new breed to the Breed collection
  db.Breed.create(req.body).then(data => res.json(data));
});

module.exports = router;
