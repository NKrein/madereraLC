
//--------------------------------------------------------------------------------------DEFINICION STOCK--
function StockMachimbre(media, trescuarto, una) {
    this.media = media;
    this.trescuarto = trescuarto;
    this.una = una;
}

function cargarStock() {

    let stockMedia = document.getElementById("stockMedia").value;
    let stockTrescuarto = document.getElementById("stockTrescuarto").value;
    let stockUna = document.getElementById("stockUna").value;

    let stockMachimbre = new StockMachimbre(stockMedia, stockTrescuarto, stockUna);

    if (stockMedia != "" && stockTrescuarto != "" && stockUna != "") {
        console.log(stockMachimbre);
        console.log("STOCK DE M² CARGADO");
    } else {
        console.log("STOCK NO CARGADO");
    }

    localStorage.setItem("stock", JSON.stringify(stockMachimbre));              //<<<<<Guardo datos



}


//------------------------------------------------------------------------------------DEFINICION PRECIOS--
function PrecioMachimbre(media, trescuarto, una) {
    this.media = media;
    this.trescuarto = trescuarto;
    this.una = una;
}

function cargarPrecios() {

    let precioMedia = document.getElementById("precioMedia").value;
    let precioTrescuarto = document.getElementById("precioTrescuarto").value;
    let precioUna = document.getElementById("precioUna").value;

    let precioMachimbre = new PrecioMachimbre(precioMedia, precioTrescuarto, precioUna);

    if (precioMedia != "" && precioTrescuarto != "" && precioUna != "") {
        console.log(precioMachimbre);
        console.log("PRECIOS POR MEDIDA CARGADOS");
    } else {
        console.log("PRECIOS NO CARGADOS");
    }

    localStorage.setItem("precio", JSON.stringify(precioMachimbre));              //<<<<<Guardo datos


}



//-------------------------------------------------------------------------------------------PRESUPUESTO--


function presupuestar() {


    let cuantoMedia = document.getElementById("cuantoMedia").value;
    let cuantoTrescuarto = document.getElementById("cuantoTrescuarto").value;
    let cuantoUna = document.getElementById("cuantoUna").value;

    let stockMachimbre = JSON.parse(localStorage.getItem("stock"));     //RECUPERO DATOS
    let precioMachimbre = JSON.parse(localStorage.getItem("precio"));   //<<<<<<<<<<<<<<


    if (cuantoMedia > stockMachimbre.media || cuantoTrescuarto > stockMachimbre.trescuarto || cuantoUna > stockMachimbre.una) {

        let mensajeStock = document.getElementById("mensajeStock");
        mensajeStock.innerHTML = "No hay disponibre en esa cantidad, intente otro valor.";

    } else {



        mensajeStock.innerHTML = "Disponibilidad: OK";
        let mensajeResultado = document.getElementById("mensajeResultado");



        function precioParcial(precio, cantidad) {
            var resultado = precio * cantidad;
            return resultado;
        }

        var totalMedia = precioParcial(precioMachimbre.media, cuantoMedia);
        let parcialMedia = document.createElement("p");
        parcialMedia.innerHTML = "Precio machimbre de 1/2: $" + totalMedia;
        mensajeResultado.appendChild(parcialMedia);

        var totalTresCuarto = precioParcial(precioMachimbre.trescuarto, cuantoTrescuarto);
        let parcialTrescuarto = document.createElement("p");
        parcialTrescuarto.innerHTML = "Precio machimbre de 3/4: $" + totalTresCuarto;
        mensajeResultado.appendChild(parcialTrescuarto);


        var totalUna = precioParcial(precioMachimbre.una, cuantoUna);
        let parcialUna = document.createElement("p");
        parcialUna.innerHTML = "Precio machimbre de 1: $" + totalUna;
        mensajeResultado.appendChild(parcialUna);


        var precioTotal = (totalMedia + totalTresCuarto + totalUna);
        let totalPresupuesto = document.createElement("p");
        totalPresupuesto.innerHTML = "TOTAL PRESUPUESTO: $" + precioTotal;
        mensajeResultado.appendChild(totalPresupuesto);

    }

}
