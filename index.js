let prueba = -34;
if (prueba> 0){
    console.log("El valor es mayor a 0");
}
else {
    console.log("El valor es menor a 0");
}

let edad = 14;
if (edad > 18) {
    console.log("Es mayor de edad");
}
else {
    console.log("Es menor de edad");
}

let compra = true;

if (compra == true) {
    console.log("Compra realizada");
}

else {
    console.log("Compra no realizada");
}

let frutas = false;

switch (frutas) {
     case true:
        console.log("Fruta");
        break;
        
    case false:
        console.log("Verdura");
        break;

        default:
            console.log("Otro");
            break;
}

let num = 2;

switch (num) {
    case 1: 
    console.log("Tu numero es menor a 2 pero mayor que 0");
    break;
    
    case 2:
        console.log("Tu numero es menor a 3 pero mayor que 0");
        break;
        
    case 3:
        console.log("Tu numero es igual a 3");
        break;

        default:
            console.log("Escribir otro numero");
}