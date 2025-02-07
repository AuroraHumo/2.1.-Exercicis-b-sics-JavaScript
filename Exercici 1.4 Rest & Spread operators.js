// Nivell 1. Exercici 1

let arr1 = [2,5,3,6]
let arr2 = [2,54,23,6, 'algo']
let arrResult = [...arr1, ...arr2]

// Nivell 1. Exercici 2

function suma(...numeros) {
    return numeros.reduce((accumulador, num) => (accumulador + num), 0)
}

suma(8,4,2)

// Nivell 2. Exercici 3

const objecte1 = {
    categoria: 'gorro',
    material: 'lana',
    color: 'verde'
}

const objecte2 = {...objecte1}
console.log(objecte1)
objecte2.color = 'amarillo'
console.log(objecte2)

// Nivell 2. Exercici 4

const objetosMochila = ['libro', 'neceser', 'cuaderno', 'gafas', 'calcetines sucios']
const [obj1, obj2, ...restoObjetos] = objetosMochila

// Nivell 3. Exercici 5

const recibeTres = (uno, dos , tres) => {
    console.log(`argument 1: ${uno}`)
    console.log(`argument 2: ${dos}`)
    console.log(`argument 3: ${tres}`)
    }

const oceanos = ['indico', 'pacifico', 'atlantico']

recibeTres(...oceanos)

// Nivell 3. Exercici 6

const objecte4 = {
    nom: 'taula',
    tamany: 'petit'
}

const objecte5 = {
    nom: 'got',
    material: 'vidre'
}

const objecte4i5 = {...objecte4 , ...objecte5}
console.log(objecte4i5)

