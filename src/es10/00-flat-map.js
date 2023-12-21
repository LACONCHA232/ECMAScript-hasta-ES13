
// flat
// Declaramos un array con varios niveles de anidamiento
const array = [1,1,2,3,4,[1,3,5,6,[1,2,4,[0,10,4,7]]]];

// Utilizamos el método .flat() para aplanar el array hasta 3 niveles de profundidad
// El resultado será un array con un solo nivel de profundidad
console.log(array.flat(3));

// flatMap
// Declaramos un array simple
const array2 = [1,2,3,4,5];

// Utilizamos el método .flatMap() para mapear cada valor del array a un nuevo array
// que contiene el valor original y su doble, y luego aplanamos el resultado
// El resultado será un array donde cada número es seguido por su doble
console.log(array2.flatMap(value => [value, value * 2]));