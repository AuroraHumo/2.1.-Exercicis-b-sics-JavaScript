//1.1

const arr = [1, 2, 3, 4]
const arrCuadrat = (arr.map((x) => x * 2))
console.log(arrCuadrat)

//1.2

const arr2 = arr.filter((x) => x % 2 === 0)
console.log(arr2)

//1.3

const arr3 = [1, 10, 8, 11 ]
const arr4 = arr3.find((x) => x > 10)
console.log(arr4)

//1.4

const arr5 = [13, 7, 8, 21]
const arr6 = arr5.reduce((total, x) => total + x, 0)
console.log(arr6)

//2.5

const arr7 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]
function operacio (...arr) {
    return arr.filter((x) => x >= 10).map((x) => x * 2).reduce((total, x) => total + x, 0)
}
console.log(operacio(...arr7))

//3.6

const arr8 = [11, 12, 13, 14]
arr8.every((x) => x > 10) ? console.log('Todos los elementos son mayores que 10') : console.log('No todos los elementos son mayores que 10')
arr8.some((x) => x > 10) ? console.log('Algunos elementos son mayores que 10') : console.log('Ningun elemento es mayor que 10')

