
    $.ajax({
        url: "https://www.dolarsi.com/api/api.php?type=valoresprincipales",
        type: "GET",
        dataType: "json"
    }).done( function(resultadoJson) {
    console.log(resultadoJson);
        var dolarHoyCompra = document.createTextNode("Valor Compra: AR$" + resultadoJson[1].casa.compra);
        $("#valorCompra").append(dolarHoyCompra);
        var dolarHoyVenta = document.createTextNode("Valor Venta: AR$" + resultadoJson[1].casa.venta);
        $("#valorVenta").append(dolarHoyVenta);     
    }).fail( function(xhr, status, error){         
        console.log(xhr);
        console.log(status);
        console.log(error);
    }) 


    //--------------------------------------------------------------------------------------RECUPERO DATOS EN CASO DE TENERLOS--

let stockMachimbre = JSON.parse(localStorage.getItem("stockMachimbre"));        //RECUPERO DATOS
let precioMachimbre = JSON.parse(localStorage.getItem("precioMachimbre"));      //<<<<<<<<<<<<<<
let stockPlacas = JSON.parse(localStorage.getItem("stockPlacas"));              //RECUPERO DATOS
let precioPlacas = JSON.parse(localStorage.getItem("precioPlacas"));            //<<<<<<<<<<<<<<

$("#stockMedia").val(stockMachimbre.media);
$("#stockTrescuarto").val(stockMachimbre.trescuarto);
$("#stockUna").val(stockMachimbre.una);
$("#stockOSB").val(stockPlacas.osb);
$("#stockTerciado").val(stockPlacas.terciado);
$("#stockDurlock").val(stockPlacas.durlock);
$("#precioMedia").val(precioMachimbre.media);
$("#precioTrescuarto").val(precioMachimbre.trescuarto);
$("#precioUna").val(precioMachimbre.una);
$("#precioOSB").val(precioPlacas.osb);
$("#precioTerciado").val(precioPlacas.terciado);
$("#precioDurlock").val(precioPlacas.durlock);

//--------------------------------------------------------------------------------------DEFINICION STOCK--------------------

function StockMachimbre(media, trescuarto, una) {
    this.media = media;
    this.trescuarto = trescuarto;
    this.una = una;
}
function StockPlacas(osb, terciado, durlock) {
    this.osb = osb;
    this.terciado = terciado;
    this.durlock = durlock;
}

function cargarStockMachimbre() {

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

    localStorage.setItem("stockMachimbre", JSON.stringify(stockMachimbre));         //<<<<<Guardo datos

}

function cargarStockPlacas() {

    let stockOSB = $("#stockOSB").val();
    let stockTerciado = $("#stockTerciado").val();
    let stockDurlock = $("#stockDurlock").val();

    let stockPlacas = new StockPlacas(stockOSB, stockTerciado, stockDurlock);

    if (stockOSB != "" && stockTerciado != "" && stockDurlock != "") {
        console.log(stockPlacas);
        console.log("STOCK PLACAS");
    } else {
        console.log("STOCK PLACAS NO CARGADO");
    }

    localStorage.setItem("stockPlacas", JSON.stringify(stockPlacas));               //<<<<<Guardo datos

}


//--------------------------------------------------------------------------------------DEFINICION PRECIOS-------------------

function PrecioMachimbre(media, trescuarto, una) {
    this.media = media;
    this.trescuarto = trescuarto;
    this.una = una;
}
function PrecioPlacas(osb, terciado, durlock) {
    this.osb = osb;
    this.terciado = terciado;
    this.durlock = durlock;
}



function cargarPreciosMachimbre() {

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

    localStorage.setItem("precioMachimbre", JSON.stringify(precioMachimbre));        //<<<<<Guardo datos

}

function cargarPreciosPlacas() {

    let precioOSB = $("#precioOSB").val();
    let precioTerciado = $("#precioTerciado").val();
    let precioDurlock = $("#precioDurlock").val();

    let precioPlacas = new PrecioPlacas(precioOSB, precioTerciado, precioDurlock);

    if (precioOSB != "" && precioTerciado != "" && precioDurlock != "") {
        console.log(precioPlacas);
        console.log("PRECIO PLACAS");
    } else {
        console.log("PRECIO PLACAS NO CARGADO");
    }

    localStorage.setItem("precioPlacas", JSON.stringify(precioPlacas));              //<<<<<Guardo datos

}




//---------------------------------------------------------------------------------------PRESUPUESTO-------------------------

$("#cuantoMedia").val(0);
$("#cuantoTrescuarto").val(0);
$("#cuantoUna").val(0);
$("#cuantoOSB").val(0);
$("#cuantoTerciado").val(0);
$("#cuantoDurlock").val(0);



function presupuestar() {
    $("#mensajeResultado p").remove();


    let cuantoMedia = parseInt($("#cuantoMedia").val());
    let cuantoTrescuarto = parseInt($("#cuantoTrescuarto").val());
    let cuantoUna = parseInt($("#cuantoUna").val());
    let cuantoOSB = parseInt($("#cuantoOSB").val());
    let cuantoTerciado = parseInt($("#cuantoTerciado").val());
    let cuantoDurlock = parseInt($("#cuantoDurlock").val());


    
    let stockMachimbre = JSON.parse(localStorage.getItem("stockMachimbre"));        //RECUPERO DATOS
    let precioMachimbre = JSON.parse(localStorage.getItem("precioMachimbre"));      //<<<<<<<<<<<<<<
    let stockPlacas = JSON.parse(localStorage.getItem("stockPlacas"));              //RECUPERO DATOS
    let precioPlacas = JSON.parse(localStorage.getItem("precioPlacas"));            //<<<<<<<<<<<<<<


    if (cuantoMedia > stockMachimbre.media || cuantoTrescuarto > stockMachimbre.trescuarto || cuantoUna > stockMachimbre.una || cuantoOSB > stockPlacas.osb || cuantoTerciado > stockPlacas.terciado|| cuantoDurlock > stockPlacas.durlock) {


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

        var totalOSB = precioParcial(precioPlacas.osb, cuantoOSB);
        while (cuantoOSB != 0){
            let parcialOSB = document.createElement("p");
            parcialOSB.innerHTML = cuantoOSB + " Placas OSB: $" + totalOSB;
            mensajeResultado.append(parcialOSB);
            break;
        }

        var totalTerciado = precioParcial(precioPlacas.terciado, cuantoTerciado);
        while (cuantoTerciado != 0){
            let parcialTerciado = document.createElement("p");
            parcialTerciado.innerHTML = cuantoTerciado + " Placas Terciado: $" + totalTerciado;
            mensajeResultado.append(parcialTerciado);
            break;
        }

        var totalDurlock = precioParcial(precioPlacas.durlock, cuantoDurlock);
        while (cuantoDurlock != 0){
            let parcialDurlock = document.createElement("p");
            parcialDurlock.innerHTML = cuantoDurlock + " Placas Durlock: $" + totalDurlock;
            mensajeResultado.append(parcialDurlock);
            break;
        }


        var precioTotal = (totalMedia + totalTresCuarto + totalUna + totalOSB + totalTerciado + totalDurlock);
        let totalPresupuesto = document.createElement("p");
        totalPresupuesto.innerHTML = "TOTAL PRESUPUESTO: $" + precioTotal;
        mensajeResultado.append(totalPresupuesto);

    }

}
