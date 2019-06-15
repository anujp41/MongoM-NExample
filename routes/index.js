const router = require('express').Router();
const catRoutes = require('./Cats');
const breedRoutes = require('./Breed');

router.use('/cats', catRoutes);
router.use('/breed', breedRoutes);

module.exports = router;
