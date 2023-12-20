

const anotherfunction = new Promise((resolve, reject) => {
    if (true) {
        resolve('Hey!');
    } else {
        reject('Ups!');
    }
});

anotherfunction
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'));