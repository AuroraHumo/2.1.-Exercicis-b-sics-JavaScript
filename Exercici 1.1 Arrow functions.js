
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

    // NIVELL 1. Exercici 3
    
    class Person {
        constructor (name) {
            this.name = name
        }

        greet = () => {
            console.log ( `Hola, ${this.name}`)
        } 
    }

    const persona1 = new Person ('Carles');
    persona1.greet()

// NIVELL 2. Exercici 4.

let arreglo = [2,45,8,-5]

const printNumbers = (array) => {

    for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
    }
}

printNumbers(arreglo)

// NIVELL 3. Exercici 5.

setTimeout(() => {
    console.log('bona tarda')
}, 3000);
