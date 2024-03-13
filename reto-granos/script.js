function actualizarStock() {
    // Generar un stock existente aleatorio entre 1000 y 5000 toneladas
    // Se puede modificar en caso de que se sepa el stock existente
    const stockExistente = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

    // Obtener la cantidad ingresada por el usuario
    const cantidadIngresada = parseFloat(document.getElementById('cantidad-ingreso').value);

    // Sumar la cantidad ingresada al stock existente
    const stockTotal = stockExistente + cantidadIngresada;

    // Mostrar el resultado en pantalla
    document.getElementById('resultado').textContent = "Stock total después de la carga: " + stockTotal + " toneladas.";

    // Mostrar el resultado en la consola
    console.log("Stock existente:", stockExistente);
    console.log("Stock total después de la carga:", stockTotal);
} 