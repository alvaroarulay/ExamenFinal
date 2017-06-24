var models = require('../models/models.js');
exports.principal = (req, res, next) =>{models.nota.findAll().then( function(nota){
                       res.render('index',{ title:'Examen Final',subtitle: 'Avances en computacion', nota: nota });});};


exports.registroNota = (req, res)=> {
	 var estudiante={nombre:'alvaro',nota:'90'};
	 res.render('registroNota',{estudiante:estudiante});};
exports.guardarNotas = (req, res)=> {
	 estudiante = models.nota.build (req.body.estudiante);
	 //estudiante = models.nota.build (req.post[]);
     estudiante.save({fields:["nombre","nota"]}).then(()=>{res.render('guardarNotas', {mensaje:'Se registro con exito'});
    			 }); };
