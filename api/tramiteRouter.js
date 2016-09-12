var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var utils = require('../utils.js');
router.use(bodyParser.json());

var Tramite = require('../models/Tramite.js');

router.post('/', function (req, res) {
    var tramite = new Tramite();
    utils.copyPropsByName(req.body, tramite);
    console.log(tramite.numero);
    if (tramite.numero != undefined) {
        Tramite.findOneAndUpdate({ _id: tramite._id }, tramite, { upsert: true }, function (err, result) {
            if (err) {
                console.log(err);
                res.status(500).send("Error al guardar el trámite");
                return;
            }
            res.json(result);
        });
    }
    else {
        tramite.save(function (err) {
            if (err) {
                console.log(err);
                res.status(500).send("Error al guardar el trámite");
                return;
            }
            else {
                res.send(tramite);
            }
        });
    }



});

router.get('/:numero', function (req, res) {
    if (req.params.numero == "todos") {
        Tramite
            .find({})
            .select('numero contacto fechaEntrega totalCosto totalDebe estatus')
            .exec(function (err, data) {
                if (err) {
                    console.log(err);
                    res.status(500).send("No se pudo cargar los trámites");
                    return;
                }
                else {
                    var projection = [];
                    data.forEach(function (element) {
                        projection.push({
                            numero: element.numero,
                            contacto: element.contacto,
                            fechaEntrega: element.fechaEntrega.toLocaleDateString(),
                            estatus: element.estatus,
                            totalCosto: element.totalCosto.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'),
                            totalDebe: element.totalDebe.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
                        });
                    }, this);


                    res.json(projection);
                }
            });
    }
    else {
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
    }
});

module.exports = router;