// NIVELL 1. Exercici 1.

function potConduir (edat) {
    edat >= 18 ? console.log('Pots conduïr') : console.log('No pots conduïr')
}

potConduir(19)

// NIVELL 1. Exercici 2.

let edat1 = 23
let edat2 = 56
let resultat = edat1 > edat2 ? 'edat1 > edat2' : 'edat2 > edat1'
console.log(resultat)

// NIVELL 2. Exercici 3.

let num1 = 0
let res = num1 > 0 ? 'positiu' : num1 < 0 ? 'negatiu' : 'zero'
console.log(res)

function trobarMaxim (a, b, c) {
    return res = a > b 
        ? (a > c ? 'a' : 'c')
        : (b > c ? 'b' : 'c')
}

let max = trobarMaxim(5,-564,84)
console.log(max)