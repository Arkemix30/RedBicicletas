const bicicleta = require('../../models/bicicleta');
var Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = function(req,res){
    res.status(200).json({
        bicicleta: Bicicleta.allbicis
    });
}

exports.bicicleta_create = function(req,res){
    let bici = new bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];

    bicicleta.add(bici);

    res.status(200).json({
        bicicleta: bici
    });
}

exports.bicicleta_delete = function(req, res){
    bicicleta.removeById(req.body.id);
    res.status(204).json({
        bicicleta: Bicicleta.allbicis
    });
}

exports.bicicleta_update = function(req, res){
    let {id} = req.params;

    for (let i=0; i< bicicleta.allbicis.length; i++){
        if(bicicleta.allbicis[i].id == id){
            bicicleta.allbicis[i].color = req.body.color;
            bicicleta.allbicis[i].modelo = req.body.modelo;
            bicicleta.allbicis[i].ubicacion = [req.body.lat, req.body.lng];
        }
    }

    res.status(202).json({
        bicicleta: bicicleta.allbicis
    })
}