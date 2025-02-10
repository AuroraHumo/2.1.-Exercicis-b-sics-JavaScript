//1.1
const saludar = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hola mundo cruel')
    }, 2000)
})

//1.2
saludar.then( missatge => console.log(missatge))

//1.3
const saludar2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let input = 'hoola'
        if (input === 'hola') {
            resolve('el input és correcte')
        } else {
            reject('Error')
        }
    }, 2000)
})
saludar2
    .then( missatge => console.log(missatge))
    .catch( error => console.log(error))

//1.4 await

async function espera() {
    let resultat = await saludar
    console.log(resultat)
}
espera()

//2.5 Gestió d'errors

const saludar3 = new Promise((resolve, reject) => {
    let weather = 'lluvia'
    setTimeout(() => {
        if (weather != 'lluvia') {
            resolve('Hola mundo')
        } else  reject('Hola mundo cruel y gris')
    }, 2000)
    
})

async function espera() {
    try {
        let resultat = await saludar3
        console.log(resultat)
    } catch (error) {
        console.log(error)
    }
    
}
espera()

//3.6 promise.all

const promesa1 = new Promise (resolve => setTimeout(() => resolve('Primera promesa resolta'), 2000))
const promesa2 = new Promise (resolve => setTimeout(() => resolve('Segona promesa resolta'), 3000))

Promise.all([promesa1, promesa2])
    .then(res => console.log(res))
    .catch( err => console.log(err))

