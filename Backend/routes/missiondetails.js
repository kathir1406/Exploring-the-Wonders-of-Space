var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
var missionModel = require('../models/missionmodel');

// Create mission details in the database
router.post('/create', (req, res) => {
    const { missionName, agency, launchDate, description, image } = req.body;

    let mission = new missionModel({
        missionName: missionName,
        agency: agency,
        launchDate: launchDate,
        description: description,
        image: image
    });

    mission.save()
        .then(resp => res.send(resp))
        .catch(err => res.send(err));
});

module.exports = router;