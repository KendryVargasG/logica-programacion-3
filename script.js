function calcularFactorial() {

    let numero = Number(document.getElementById("numero").value);

    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {

        resultado.innerHTML =
            "Error: Debe ingresar un número válido.";

        return;
    }

    if (numero < 0) {

        resultado.innerHTML =
            "Error: El factorial no existe para números negativos.";

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

        <p class="texto1">
            El Número Factorial de:
        </p>

        <h3>${numero}</h3>

        <p class="texto2">
            es igual a:
        </p>

        <h2>🎉${factorial}🎉</h2>

    </div>
`;
}