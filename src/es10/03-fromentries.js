
// Transforma un array en un objeto

const entries = new Map([['Name', 'Oscar'], ['Age', 32]]);
console.log(entries);
console.log(Object.fromEntries(entries));