// NIVELL 1. Exercici 1.

function potConduir (edat) {
    return edat >= 18 ? ('Pots conduïr') : ('No pots conduïr')
}

potConduir(7)

// NIVELL 1. Exercici 2.

let edat1 = 23
let edat2 = 56
let resultat = edat1 > edat2 ? 'edat1 > edat2' : 'edat2 > edat1'

// NIVELL 2. Exercici 3.

let num1 = 0
let res = num1 > 0 ? 'positiu' : num1 < 0 ? 'negatiu' : 'zero'

function trobarMaxim (a, b, c) {
    return res = a > b 
        ? (a > c ? 'a' : 'c')
        : (b > c ? 'b' : 'c')
} // AMB AQUEST SISTEMA TERNARI NO ES POT CHECKEJAR SI TOTS SON IGUALS. NO ES IDONI.

let max = trobarMaxim(5,-564,84)

// NIVELL 3. Exercici 4.

const arr = [3,45,-2, 0]

const parOImpar = array => array.map ( n => n === 0 ? 'és zero' : n % 2 == 0 ? 'par' : 'impar' )

console.log( parOImpar(arr) );