var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var Tramite = require('../models/Tramite.js');

router.post('/', function(req, res) {
    console.log('posted');

    var tramite = new Tramite();

    for(var k in req.body) tramite[k]=req.body[k];

    tramite.save(function(err) { 
        if (err) {            
            console.log(err);
            res.status(500).send("Error saving Tramite");
        }
        else {
            res.send(tramite);
        }
    });

});

module.exports = router;