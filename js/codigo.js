let opcion, numero1, numero2, resultado;
let repetir = true;

opcion = parseInt(prompt("Seleccione una opción o pulse 0 para salir\n1. Sumar\n2. Restar\n3. Multiplicar \n4. Dividir\n0. Salir\n\n"));

while (repetir) {
    //Validación de opción - número entre 0 y 4
    if (opcion >= 0 && opcion <=4) {
        console.log("opcion válida")

        //Salir del programa si se pulsa 0
        if (opcion != 0) {
            
            //Pedir números al usuario
            numero1 = parseInt(prompt("Inserte el primer número: ", 0));
            numero2 = parseInt(prompt("Inserte el segundo número: ", 0));

            if (isNaN(numero1) || (isNaN(numero2))) {
                alert("Los números insertados no son válidos");
            } else {
                //Swich para la realización de las operaciones
                switch(opcion) {
                    case 1:
                        resultado = numero1 + numero2;
                        alert (numero1 + " + " + numero2 + " = " + resultado);
                        break;
                    case 2:
                        resultado = numero1 - numero2;
                        alert (numero1 + " - " + numero2 + " = " + resultado);
                        break;
                    case 3:
                        resultado = numero1 * numero2;
                        alert (numero1 + " x " + numero2 + " = " + resultado);
                        break;
                    case 4:
                        if (numero2 == 0) {
                            alert("No se puede dividir entre 0");
                            
                        } else {
                            resultado = numero1 / numero2;
                            alert (numero1 + " / " + numero2 + " = " + resultado);
                        }
                        break;
                        
                    default:
                        alert("Los números insertados no son válidos");
                        break;
                }

                opcion = parseInt(prompt("Seleccione una opción o pulse 0 para salir\n1. Sumar\n2. Restar\n3. Multiplicar \n4. Dividir\n0. Salir\n\n"));
            }

        } else {
            //Salir del programa si la opción seleccionada es 0
            alert("Ha seleccionada salir del programa. Hasta la próxima");
            repetir = false;
        }
    } else {
        //Se vuelve a pedir una opción si no se ha insertado una opción válida
        alert("No ha insertado una opción válida");
        opcion = parseInt(prompt("Seleccione una opción o pulse 0 para salir\n1. Sumar\n2. Restar\n3. Multiplicar \n4. Dividir\n0. Salir\n\n"));
    }
}