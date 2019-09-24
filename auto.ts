export class Auto{
    marca: string;
    modelo: string;
    puertas: string;
    color: string;
    ruedas: string;
    constructor(_marca, _modelo, _puertas, _color, _ruedas ){
        this.marca = _marca;
        this.modelo = _modelo;
        this.puertas = _puertas;
        this.color = _color;
        this.ruedas = _ruedas;
    }

}
let carro: Auto = new Auto("toyota", "4x4", "cuatro puertas", "plomo", "cuatro ruedas");

console.log(carro);
