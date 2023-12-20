
async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(reponse => console.log(reponse.value));
other.next().then(reponse => console.log(reponse.value));
other.next().then(reponse => console.log(reponse.value));
console.log("Hello World!");



// Otra forma de hacer una funcion asyncrona para rellenar un array
async function NAMES(array){
    for await (let value of array){
        console.log(value);
    }
}

const getData = NAMES(["Diego", "Daniel", "Oscar"]);
console.log("HOLA");