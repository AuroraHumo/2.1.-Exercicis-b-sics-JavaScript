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