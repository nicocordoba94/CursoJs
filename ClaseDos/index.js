let num1 = parseInt(prompt("Ingrese un numero:"))
let operacion = prompt("Ingrese un operador (+, -, *, /) dependiendo de la operacion que quiere realizar:")
let num2 = parseInt(prompt("Ingrese el segundo numero:"))

if(operacion == "+"){
    alert(num1 + num2)
}else if (operacion == "-"){
    alert(num1-num2)
}else if(operacion == "*"){
    alert(num1*num2)
}else if(operacion == "/"){
    alert(num1/num2)
}else(alert("Ingrese un operador correcto!"))

