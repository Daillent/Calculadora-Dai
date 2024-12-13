const realizarOperacion = (num1, num2, operacion) => {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "No es posible realizar una división por cero.";
        }
        return num1 / num2;
    } else {
        return "Esta operación no es válida.";
    }
};

let operacion = "";

while (true) {
    const num1 = parseFloat(prompt("Ingrese el primer número: "));
    if (isNaN(num1)) {
        console.log("Por favor, ingrese un número válido.");
        continue;
    }

    const num2 = parseFloat(prompt("Ingrese el segundo número: "));
    if (isNaN(num2)) {
        console.log("Por favor, ingrese un número válido.");
        continue;
    }

    operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar: ").toLowerCase();

    if (operacion === "salir") {
        console.log("Gracias por usar la calculadora. ¡Adiós!");
        break;
    }

    const resultado = realizarOperacion(num1, num2, operacion);
    console.log(`El resultado de la ${operacion} entre ${num1} y ${num2} es: ${resultado}`);
}
