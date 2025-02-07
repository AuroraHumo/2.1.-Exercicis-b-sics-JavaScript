//1.1
let noms = ['Anna', 'Bernat', 'Clara']
noms.forEach((nom) => console.log(nom))
//1.2
for (const element of noms) {
    console.log(element)
}
//1.3
let numeros = [1, 2, 3, 4, 5, 6]
let numerosPares = numeros.filter((numero) => (numero % 2 === 0))
console.log(numerosPares)
//2.4
let obj2 = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' }
for (const key in obj2) {
    console.log(`${key}: ${obj2[key]}`)
}
//2.5
for (const element of numeros) {
    console.log(element)
    if (element === 5) {
        break
    }
}
//3.6
for (const [index, element] of noms.entries()) {
    console.log(index, element)
}
