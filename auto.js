"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(_marca, _modelo, _puertas, _color, _ruedas) {
        this.marca = _marca;
        this.modelo = _modelo;
        this.puertas = _puertas;
        this.color = _color;
        this.ruedas = _ruedas;
    }
    return Auto;
}());
exports.Auto = Auto;
var carro = new Auto("toyota", "4x4", "cuatro puertas", "plomo", "cuatro ruedas");
console.log(carro);
