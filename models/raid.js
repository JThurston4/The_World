const mongoose = require('mongoose');
// const Joi = require('joi');
// const config = require('config');

let raidSchema = new mongoose.Schema({
  username: {
      type: String,
      unique: true
    }
})

const Raid = mongoose.model('Raid', raidSchema)

module.exports = Raid