
//--------------------------------------------------------------------------------------DEFINICION STOCK--
function StockMachimbre(media, trescuarto, una) {
    this.media = media;
    this.trescuarto = trescuarto;
    this.una = una;
}
function StockProducto(tipo, cantidad) {
    this.tipo = tipo;
    this.cantidad = cantidad;
}

function cargarStock() {

    let stockMedia = $("#stockMedia").val();
    let stockTrescuarto = $("#stockTrescuarto").val();
    let stockUna = $("#stockUna").val();

    let stockMachimbre = new StockMachimbre(stockMedia, stockTrescuarto, stockUna);

    if (stockMedia != "" && stockTrescuarto != "" && stockUna != "") {
        console.log(stockMachimbre);
        console.log("STOCK DE M² CARGADO");
    } else {
        console.log("STOCK NO CARGADO");
    }

    localStorage.setItem("stockMachimbre", JSON.stringify(stockMachimbre));              //<<<<<Guardo datos



}


//------------------------------------------------------------------------------------DEFINICION PRECIOS--
function PrecioMachimbre(media, trescuarto, una) {
    this.media = media;
    this.trescuarto = trescuarto;
    this.una = una;
}
function PrecioProducto(tipo, precio) {
    this.tipo = tipo;
    this.precio = precio;
}


function cargarPrecios() {

    let precioMedia = $("#precioMedia").val();
    let precioTrescuarto = $("#precioTrescuarto").val();
    let precioUna = $("#precioUna").val();

    let precioMachimbre = new PrecioMachimbre(precioMedia, precioTrescuarto, precioUna);

    if (precioMedia != "" && precioTrescuarto != "" && precioUna != "") {
        console.log(precioMachimbre);
        console.log("PRECIOS POR MEDIDA CARGADOS");
    } else {
        console.log("PRECIOS NO CARGADOS");
    }

    localStorage.setItem("precioMachimbre", JSON.stringify(precioMachimbre));              //<<<<<Guardo datos


}



//-------------------------------------------------------------------------------------------PRESUPUESTO--

$("#cuantoMedia").val(0);
$("#cuantoTrescuarto").val(0);
$("#cuantoUna").val(0);

function presupuestar() {

    let cuantoMedia = parseInt($("#cuantoMedia").val());
    let cuantoTrescuarto = parseInt($("#cuantoTrescuarto").val());
    let cuantoUna = parseInt($("#cuantoUna").val());

    
    let stockMachimbre = JSON.parse(localStorage.getItem("stockMachimbre"));     //RECUPERO DATOS
    let precioMachimbre = JSON.parse(localStorage.getItem("precioMachimbre"));   //<<<<<<<<<<<<<<


    if (cuantoMedia > stockMachimbre.media || cuantoTrescuarto > stockMachimbre.trescuarto || cuantoUna > stockMachimbre.una) {


        $("#mensajeResultado").append('<p id="mensajeStock">No hay disponibilidad de stock, intente otro valor.</p>');


    } else {

        $("#mensajeStock").remove();
        $("#mensajeResultado").append('<p id="mensajeStock">Disponibilidad: OK.</p>');
        let mensajeResultado = $("#mensajeResultado");



        function precioParcial(precio, cantidad) {
            var resultado = precio * cantidad;
            return resultado;
        }
        
        var totalMedia = precioParcial(precioMachimbre.media, cuantoMedia);
        while (cuantoMedia != 0){
            let parcialMedia = document.createElement("p");
            parcialMedia.innerHTML = "Precio machimbre de 1/2: $" + totalMedia;
            mensajeResultado.append(parcialMedia);
            break;
        }

        var totalTresCuarto = precioParcial(precioMachimbre.trescuarto, cuantoTrescuarto);
        while (cuantoTrescuarto != 0){
            let parcialTrescuarto = document.createElement("p");
            parcialTrescuarto.innerHTML = "Precio machimbre de 3/4: $" + totalTresCuarto;
            mensajeResultado.append(parcialTrescuarto);
            break;
        }
        
        var totalUna = precioParcial(precioMachimbre.una, cuantoUna);
        while (cuantoUna != 0){
            let parcialUna = document.createElement("p");
            parcialUna.innerHTML = "Precio machimbre de 1: $" + totalUna;
            mensajeResultado.append(parcialUna);
            break;
        }

        var precioTotal = (totalMedia + totalTresCuarto + totalUna);
        let totalPresupuesto = document.createElement("p");
        totalPresupuesto.innerHTML = "TOTAL PRESUPUESTO: $" + precioTotal;
        mensajeResultado.append(totalPresupuesto);

    }

}
