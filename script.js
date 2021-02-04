
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

    localStorage.setItem("stock", JSON.stringify(stockMachimbre));



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

    localStorage.setItem("precio", JSON.stringify(precioMachimbre));


}



//-------------------------------------------------------------------------------------------PRESUPUESTO--

function presupuestar() {


    let cuantoMedia = document.getElementById("cuantoMedia").value;
    let cuantoTrescuarto = document.getElementById("cuantoTrescuarto").value;
    let cuantoUna = document.getElementById("cuantoUna").value;

    let stockMachimbre = JSON.parse(localStorage.getItem("stock"));     //RECUPERO DATOS
    let precioMachimbre = JSON.parse(localStorage.getItem("precio"));   //<<<<<<<<<<<<<<


    if (cuantoMedia > stockMachimbre.media || cuantoTrescuarto > stockMachimbre.trescuarto || cuantoUna > stockMachimbre.una) {

        //let errorStock = document.createElement("p");
        //errorStock.innerHTML = "No hay disponibre en esa cantidad, intente otra.";
        //document.body.appendChild(errorStock);
        console.log("La cantidad seleccionada no está disponible en Stock, pruebe otro valor.")

    } else {


        function precioParcial(precio, cantidad) {
            var resultado = precio * cantidad;
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


    }

}
