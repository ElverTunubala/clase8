'use stric';
function funcionSubmit(event) {
    event.preventDefault();
}
//document.getElementById('comp').style.display = 'none'

let valorhora;
let tipo;
let horas;
let descuento;
let valorinicial;
let valortotal;
let valor;

function calcular() {
    horas = Number(document.getElementById('salida').value)
    tipo = document.getElementById('tipo').value;
    valor = valor_servicio(horas);
    descuento = Descuento(tipo,valor);
    valortotal = valor - descuento
    alert("Imprimir Factura")

    document.getElementById("header-msg").style.fontStyle = "60px"
    document.getElementById('comp').style.display = 'block'
    document.getElementById('valor').value = valor
    document.getElementById('Descuento').value = descuento
    document.getElementById('Total').value = valortotal
}

function valor_servicio(horas){
    if (horas > 0 && horas <= 2) {
        valorhora = 5000;
        valorinicial = (horas * valorhora)
    }
    else if (horas >= 3 && horas <= 5) {
        valorhora = 4000;
        valorinicial = (2 * 5000) + ((horas - 2) * valorhora);
    }
    else if (horas > 5 && horas <= 10) {
        valorhora = 3000;
        valorinicial = (2 * 5000) + (3 * 4000) + ((horas - 5) * valorhora);
    }
    else if (horas > 10) {
        valorhora = 2000;
        valorinicial = (2 * 5000) + (3 * 4000) + (5 * 3000) + ((horas - 10) * valorhora);
    }
    return valorinicial;
}

function Descuento(tipo, valorinicial) {
    switch (tipo) {
        case "Carro":
            descuento = valorinicial * 0.10;
            break;
        case "Moto":
            descuento = valorinicial * 0.15;
            break;
    }
    return descuento;
}
















