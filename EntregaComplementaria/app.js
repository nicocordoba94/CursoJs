
function calcularCuota (total, cuota){
    let calculo = (total/cuota);
    let resultado= "";

    if(cuota<=12){
        resultado = "Cada cuota tiene un valor de: " + calculo;
    }else{
        resultado = "Solo ofrecemos 12 cuotas o menos";
    }
    return resultado;
}

let ciclo = true;

do { 
    let totalAPagar = prompt("Ingrese el monto total a pagar:");
    let cuotaAPagar = prompt("Ingrese la cantidad de cuotas que desea:");
    if (isNaN(totalAPagar) || isNaN(cuotaAPagar)) {
        alert("Ingrese un valor valido");
    } else {
        alert(calcularCuota(totalAPagar, cuotaAPagar));
        ciclo = false;
    }
} while (ciclo === true);

