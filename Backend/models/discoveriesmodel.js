const mongoose = require('mongoose');

const discoverySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    scientist: {
        type: String,
        required: true
    },
    year: {
        type: Number, // Year of discovery
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String, // URL of the discovery-related image
        required: false
    }
});

const discoveriesmodel = mongoose.model('Discovery', discoverySchema);

module.exports = discoveriesmodel;