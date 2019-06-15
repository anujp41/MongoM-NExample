/**
 * Defines schema for the Breed collection
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const breedSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  catId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Cats'
    }
  ]
});

const Breed = mongoose.model('Breed', breedSchema);

module.exports = Breed;
