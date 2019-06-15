/**
 * Defines schema for the Cat collection
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  breedId: {
    type: Schema.Types.ObjectId,
    ref: 'Breed'
  }
});

const Cats = mongoose.model('Cats', catsSchema);

module.exports = Cats;
