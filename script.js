
//--------------------------------------------------------------------------------------DEFINICION STOCK--
function StockMachimbre (media, trescuarto, una){
    this.media = media;
    this.trescuarto = trescuarto;
    this.una = una;

}
var stockMedia = parseInt(prompt("Ingrese stock machimbre de 1/2 pulgada (m²): "));
var stockTrescuarto = parseInt(prompt("Ingrese stock machimbre de 3/4 pulgada (m²): "));
var stockUna = parseInt(prompt("Ingrese stock machimbre de 1 pulgada (m²): "));

var stockMachimbre = new StockMachimbre(stockMedia, stockTrescuarto, stockUna);
console.log(stockMachimbre);
console.log("STOCK DE M² CARGADO");

var stockMedidas = [{
    medida:"Media",
    "2m":parseInt(prompt("Ingrese cantidad stock de 1/2 en 2 metros:")),
    "2.5m":parseInt(prompt("Ingrese cantidad stock de 1/2 en 2.5 metros:")),
    "3m":parseInt(prompt("Ingrese cantidad stock de 1/2 en 3 metros:")),
    "4m":parseInt(prompt("Ingrese cantidad stock de 1/2 en 4 metros:")),
},{
    medida:"Trescuartos",
    "2m":parseInt(prompt("Ingrese cantidad stock de 3/4 en 2 metros:")),
    "2.5m":parseInt(prompt("Ingrese cantidad stock de 3/4 en 2.5 metros:")),
    "3m":parseInt(prompt("Ingrese cantidad stock de 3/4 en 3 metros:")),
    "4m":parseInt(prompt("Ingrese cantidad stock de 3/4 en 4 metros:")),

},{
    medida:"Una",
    "2m":parseInt(prompt("Ingrese cantidad stock de 1 en 2 metros:")),
    "2.5m":parseInt(prompt("Ingrese cantidad stock de 1 en 2.5 metros:")),
    "3m":parseInt(prompt("Ingrese cantidad stock de 1 en 3 metros:")),
    "4m":parseInt(prompt("Ingrese cantidad stock de 1 en 4 metros:")),

}
];
console.log("STOCK DE LARGO POR MEDIDAS CARGADO");

//------------------------------------------------------------------------------------DEFINICION PRECIOS--
function PrecioMachimbre (media, trescuarto, una){
    this.media = media;
    this.trescuarto = trescuarto;
    this.una = una;

}
var precioMedia = parseInt(prompt("Ingrese precio machimbre de 1/2 pulgada (AR$): "));
var precioTrescuarto = parseInt(prompt("Ingrese precio machimbre de 3/4 pulgada (AR$): "));
var precioUna = parseInt(prompt("Ingrese precio machimbre de 1 pulgada (AR$): "));

var precioMachimbre = new PrecioMachimbre(precioMedia, precioTrescuarto, precioUna);
console.log(precioMachimbre);
console.log("PRECIOS POR MEDIDA CARGADOS")
//-------------------------------------------------------------------------------------------PRESUPUESTO--


var cuantoMedia;
var cuantoTrescuarto;
var cuantoUna;

cuantoMedia = parseInt(prompt("Ingrese cantidad machimbre de 1/2 que necesita:"));
cuantoTrescuarto = parseInt(prompt("Ingrese cantidad machimbre de 3/4 que necesita:"));
cuantoUna = parseInt(prompt("Ingrese cantidad machimbre de 1 que necesita:"));


while (cuantoMedia > stockMedia || cuantoTrescuarto > stockTrescuarto || cuantoUna > stockUna) {
    alert("Por el momento no tenemos disponibilidad, intente otro valor:");
    cuantoMedia = parseInt(prompt("Ingrese cantidad machimbre 1/2 que necesita:"));
    cuantoTrescuarto = parseInt(prompt("Ingrese cantidad machimbre 1/4 que necesita:"));
    cuantoUna = parseInt(prompt("Ingrese cantidad machimbre de 1 que necesita:"));
}

alert("Perfecto! Podemos continuar");


function precioParcial(precio, cantidad){
    var resultado = precio*cantidad;
    return resultado;
}

var totalMedia = precioParcial(precioMachimbre.media, cuantoMedia);
console.log("Precio machimbre de 1/2: $" + totalMedia);

var totalTresCuarto = precioParcial(precioMachimbre.trescuarto, cuantoTrescuarto);
console.log("Precio machimbre de 3/4: $" + totalTresCuarto);

var totalUna = precioParcial(precioMachimbre.una, cuantoUna);
console.log("Precio machimbre de 1: $" + totalUna);

var precioTotal = (totalMedia + totalTresCuarto + totalUna);
console.log("Precio total del presupuesto: $" + precioTotal);

alert("consulte la disponibilidad de largos de machimbre");

var consultaMedida = prompt("Coloque la medida que desea consultar (media, trescuarto o una): ")

switch (consultaMedida) {
    case "media":
        let arrayFiltrado = stockMedidas.filter((el) => el.medida == "Media");
        console.log(arrayFiltrado);
    break;
    case "trescuarto":
        console.log(stockMedidas[1]);
    break;
    case "una":
        console.log(stockMedidas[2]);
    break;
}
