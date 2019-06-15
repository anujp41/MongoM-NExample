const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
  //Returns all cats and populates the name of the breed the cat belongs to
  db.Cats.find()
    .populate('breedId', 'name')
    .then(cats => res.json(cats));
});

router.get('/:id', (req, res) => {
  //Same as above but returns one selected cat
  db.Cats.findOne({ _id: req.params.id })
    .populate('breedId', 'name')
    .then(cat => res.json(cat));
});

router.post('/', (req, res) => {
  //Create new cat in the db and pushes the catId of the newly created cat into the Breed collection of the matching breed
  //Breed collection has a catId field which is an array of all cats that belong to it
  db.Cats.create(req.body).then(catData => {
    const newCatId = catData._id;
    db.Breed.findOneAndUpdate(
      {
        _id: req.body.breedId
      },
      {
        $push: { catId: newCatId }
      },
      {
        new: true
      }
    ).then(() => res.json({ catData }));
  });
});

module.exports = router;
