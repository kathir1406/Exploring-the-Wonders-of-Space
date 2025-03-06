const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    distanceFromSun: {
        type: Number, // Distance in million km or AU
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String, // URL of the planet image
        required: false
    }
});

const planetmodel = mongoose.model('Planet', planetSchema);

module.exports = planetmodel;