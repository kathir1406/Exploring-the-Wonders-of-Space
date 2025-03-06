var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
var planetModel = require('../models/planetsmodel');

// Create planet details in the database
router.post('/create', (req, res) => {
    const { name, type, distanceFromSun, description, image } = req.body;

    let planet = new planetModel({
        name: name,
        type: type,
        distanceFromSun: distanceFromSun,
        description: description,
        image: image
    });

    planet.save()
        .then(resp => res.send(resp))
        .catch(err => res.send(err));
});

module.exports = router;