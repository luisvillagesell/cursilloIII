let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 10;

console.log('El numero secreto es ' + numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Escribe un número del 1 al ${numeroMaximo}:`));

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        alert(`¡Acertaste! el numero secreto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    } else {
        if (numeroUsuario > numeroSecreto) {
        alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //incrementa el contador
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert('Llegaste al número máximo de intentos');
            alert(`Llegaste al número de ${maximosIntentos} intentos.`);
            break;
        }
    };
}
