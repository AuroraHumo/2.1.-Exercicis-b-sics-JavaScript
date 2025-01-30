
// NIVELL 1
    // Exercici 1.
    // Convertir a funció fletxa:
    // function add(a, b) {return a + b;}

const add = (a, b) =>  ( a + b )

    // NIVELL 1. Exercici 2.
    // Funció de fletxa sense paràmetres: 
    // Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.

const randomNumber = () => ( Math.floor(Math.random()*101))

console.log(randomNumber())
