// Variables globales
let operandoA;
let operandoB;
let operacion;

function init() {
    // Variables locales
    const display = document.getElementById('display');
    const botonesNumeros = Array.from(document.querySelectorAll('button[id]')).filter(b => b.id.match(/^\d$/));
    const botonesOperaciones = {
        sumar: document.getElementById('sumar'),
        restar: document.getElementById('restar'),
        multiplicar: document.getElementById('multiplicar'),
        dividir: document.getElementById('dividir')
    };
    const botonReset = document.getElementById('reset');
    const botonIgual = document.getElementById('igual');

    // Asignación de eventos
    botonesNumeros.forEach(boton => {
        boton.onclick = function(e) {
            display.value += e.target.innerText;
        }
    });

    botonReset.onclick = function(e) {
        resetear();
    };

    botonIgual.onclick = function(e) {
        operandoB = display.value;
        resolver();
    };

    Object.keys(botonesOperaciones).forEach(key => {
        botonesOperaciones[key].onclick = function(e) {
            operandoA = display.value;
            operacion = key;
            limpiar();
        }
    });
}

function limpiar() {
    document.getElementById('display').value = '';
}

function resetear() {
    document.getElementById('display').value = '';
    operandoA = '';
    operandoB = '';
    operacion = '';
}

function resolver() {
    let resultado;
    switch(operacion) {
        case 'sumar':
            resultado = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case 'restar':
            resultado = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case 'multiplicar':
            resultado = parseFloat(operandoA) * parseFloat(operandoB);
            break;
        case 'dividir':
            resultado = parseFloat(operandoA) / parseFloat(operandoB);
            break;
    }
    resetear();
    document.getElementById('display').value = resultado;
}
