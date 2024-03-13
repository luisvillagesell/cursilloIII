//calculamos la masa corporal
function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}
//clasificación de estados
function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

//ingresamos nuestros datos
function main() {
    var peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
    var altura = parseFloat(prompt("Ingresa tu altura en metros:"));
//proceso del calcula y posterior clasificación del IMC
    var imc = calcularIMC(peso, altura);
    var clasificacion = clasificarIMC(imc);
//mostramos los resultados en la consola
    console.log("Tu Índice de Masa Corporal (IMC) es: " + imc.toFixed(2));
    console.log("Clasificación de IMC: " + clasificacion);
    alert("Tu indice de Masa Corporal (IMC) es: " + imc.toFixed(2) + "  y Tu clasificación de IMC es: " + clasificacion);
}

main();
