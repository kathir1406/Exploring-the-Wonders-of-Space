const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
    missionName: {
        type: String,
        required: true
    },
    agency: {
        type: String,
        required: true
    },
    launchDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String, // URL of the mission image
        required: false
    }
});

const missionmodel = mongoose.model('Mission', missionSchema);

module.exports = missionmodel;