var bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

bicicleta.prototype.toString = function () {
    return  'id: ' + this.id + " | color: " + this.color;
}

bicicleta.allbicis = [];
bicicleta.add = function (abici){
    bicicleta.allbicis.push(abici);
}

var a = new bicicleta(1,'rojo', 'urbana', [-34.6012424, -58.3861497]);
var b = new bicicleta(2,'blanca', 'urbana', [-34.5969932, -58.38082871] );

bicicleta.add(a);
bicicleta.add(b);

module.exports = bicicleta;