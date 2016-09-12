var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var utils = require('../utils.js');
router.use(bodyParser.json());

var Tramite = require('../models/Tramite.js');

router.post('/', function (req, res) {
    console.log('posted');

    var tramite = new Tramite();

    utils.copyPropsByName(req.body, tramite);

    Tramite.findOneAndUpdate({ _id: tramite._id }, tramite, { upsert: true }, function (err, result) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(result);
    });
   
});

router.get('/:numero', function (req, res) {
    console.log("trying to find");
    Tramite.findOne({ numero: req.params.numero }, function (err, tramite) {
        if (err) {
            console.log(err);
            res.status(500).send("No se pudo encontrar el trámite");
            return;
        }
        else {
            console.log("found" + tramite);
            res.json(tramite);            
        }
    });
});

module.exports = router;