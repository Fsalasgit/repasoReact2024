// Variables
// En JavaScript, hay algunas formas de definir las variables:


const x = 1
let y = 5

console.log(x, y)   // se imprime 1 5
y += 10
console.log(x, y)   // se imprime 1 15
y = 'sometext'
console.log(x, y)   // se imprime 1 sometext
// x = 4               // provoca un error

// console.log(x);


// Arrays
// Un array y un par de ejemplos de su uso:

const t = [1, -1, 3]

t.push(5)

console.log(t.length) // se imprime 4
console.log(t[1])     // se imprime -1

t.forEach(value => {
  console.log(`valor del array en opsaicion :${value}`)  // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
})    

// Objetos
// Hay algunas formas diferentes de definir objetos en JavaScript. Un método muy común es usar objetos literales, que sucede al enumerar sus propiedades entre llaves:

const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log(object3)
console.log(object3.name.first)


// Funciones
// Ya nos hemos familiarizado con la definición de funciones de flecha. El proceso completo, sin tomar atajos, para definir una función de flecha es el siguiente:

const sum = (p1, p2) => { 
  console.log (p1) 
  console.log (p2) 
  return p1 + p2 
} 

console.log(sum(2,3))

const square = p => p * p

console.log(square(2))

