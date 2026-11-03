function calcularFactorial() {

    let numero = Number(document.getElementById("numero").value);

    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {

        resultado.innerHTML =
            "❌ Debe ingresar un número válido.";

        return;
    }

    if (numero < 0) {

        resultado.innerHTML =
            "❌ El factorial no existe para números negativos.";

        return;
    }

    let factorial = 1;
    let operacion = "";

    for (let i = 1; i <= numero; i++) {

        factorial *= i;

        operacion += i;

        if (i < numero) {
            operacion += " × ";
        }
    }

    resultado.innerHTML = `
        <h3>${numero}! = ${factorial}</h3>
        <p>${operacion}</p>
    `;
}