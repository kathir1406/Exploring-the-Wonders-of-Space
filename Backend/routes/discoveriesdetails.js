var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
var discoveryModel = require('../models/discoveriesmodel');

// Create discovery details in the database
router.post('/create', (req, res) => {
    const { title, scientist, year, description, image } = req.body;

    let discovery = new discoveryModel({
        title: title,
        scientist: scientist,
        year: year,
        description: description,
        image: image
    });

    discovery.save()
        .then(resp => res.send(resp))
        .catch(err => res.send(err));
});

module.exports = router;