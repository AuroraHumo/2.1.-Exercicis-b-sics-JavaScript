
// NIVELL 1
    // Exercici 1.

const add = (a, b) =>  a + b 

// NIVELL 1. Exercici 2.

const randomNumber = () => ( Math.floor(Math.random()*100))

console.log(`Resultat d'exercici 1.2: ${randomNumber()}`)

    // NIVELL 1. Exercici 3
    
    class Person {
        constructor (name) {
            this._name = name
        }

        greet = () => {
            console.log ( `Resultat d'exercici 1.3: Hola, ${this._name}`)
        } 
    }

    const persona1 = new Person ('Carles');
    persona1.greet()

// NIVELL 2. Exercici 4.

let arreglo = [2,45,8,-5]

const printNumbers = (array) => {

    for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Resultat d'exercici 2.4: ${element}`)
    }
}

printNumbers(arreglo)

// NIVELL 3. Exercici 5.

setTimeout(() => {
    console.log("Resultat d'exercici 3.5: bona tarda")
}, 3000);
