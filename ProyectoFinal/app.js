
const arrPago = ["tarjeta", "efectivo", "online"]
let pago = prompt("Ingrese metodo de pago: tarjeta, efectivo, online, canje, fiado")

let ciclo = true;

for(let i= 0; i<arrPago.length; i++){
    if(arrPago[i] === pago){
        let totalAPagar = prompt("Ingrese el monto total a pagar:");
        let cuotaAPagar = prompt("Ingrese la cantidad de cuotas que desea:");
        if (isNaN(totalAPagar) || isNaN(cuotaAPagar)) {
            alert("Ingrese un valor valido");
        } else {
            alert(calcularCuota(totalAPagar, cuotaAPagar));
        }

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
    }else{
        alert("Ese medio de pago se encuentra actualmente fuera de servicio.")
        break;
    }   
}









