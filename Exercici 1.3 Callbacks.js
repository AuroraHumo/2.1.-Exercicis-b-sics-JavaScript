// Nivell 1. Exercici 1

function callback (recibe) {
    let total = recibe + 1
    return total

}

function processar (nombre, funcio) {
    let cuadrado = nombre * 2
    return funcio(cuadrado)
}

console.log(processar(12, callback))

// Nivell 1. Exercici 2

function calculadora (a, b, calculo) {
    return calculo(a, b)
}

function calculo (a, b) {
    return a + b
}

console.log(calculadora(4,4, calculo))

// Nivell 2. Exercici 3

const esperarISaludar = (nom, callback2) => setTimeout(() => callback2(nom), 2000);

function callback2 (nom) {
    console.log(`Hola ${nom}`) 
}

esperarISaludar ('Pere', callback2)

// Nivell 2. Exercici 4

let array2 = ['pc', 'raton', 'pantalla']

function processarElements (array2, callback3) {
    array2.forEach(element => {
        console.log(callback3(element))
    });
}

function callback3 (e) {
    return `${e} llamado`
}

processarElements(array2, callback3)