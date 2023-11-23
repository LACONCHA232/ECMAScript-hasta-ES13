
// Forma de declarar una promesa
const anotherFuction = new Promise((resolve, reject) => {
    if(true) {
        resolve('Hey!');
    } else {
        reject('Ups!');
    }
});

// Ejecutar la promesa
anotherFuction.then(function(response) {
    console.log(response);
}).catch(function(error){
    console.log(error);
});