var mongoose = require('mongoose');

var tramiteSchema = new mongoose.Schema({    
    fechaCaptura: Date,
    capturadoPor: String,
    fechaUltimaModificacion: Date,
    modificadoPor: String,
    estatus: String,
    pagos: Array,
    servicios: Array,
    personas: Array,
    empresa: String,
    contacto: String,
    telefonoMovil: String,
    telefono: String,
    email: String,
    esForaneo: Boolean,
    direccionDeEnvio: String,
    fechaViajeMexico: Date,
    fechaEntrega: Date,
    fechasDestino: String,
    reqPasaporte: Boolean,
    reqSolicitud: Boolean,
    reqFotografias: Boolean,
    numFotografias: Number,
    reqExamenesMedicos: Boolean,
    reqPasaporteExtranjero: Boolean,
    reqSolvencia: Boolean,
    reqItinerario: Boolean,
    reqHotel: Boolean,
    reqResidencia: Boolean,
    reqCartaEmpresaMexico: Boolean,
    reqCartaInvitacion: Boolean,
    reqCartaAceptacion: Boolean,
    reqVisaUSA: Boolean
});

var AutoIncrement = require('mongoose-sequence');
tramiteSchema.plugin(AutoIncrement, {inc_field: 'numero'})

module.exports = mongoose.model('Tramite', tramiteSchema);