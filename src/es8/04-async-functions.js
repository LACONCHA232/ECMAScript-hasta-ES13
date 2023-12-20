
const fnAsync = new Promise ((resolve, reject) => {
    if(true){
        setTimeout(() => 
            resolve('AsynC!!'),2000);
    }
    else {
        reject(new Error('Error'));
    }
});

const anotherfn = async () => {
    const something = await fnAsync;
    console.log(something);
    console.log('Hola');
}

console.log('Before');
anotherfn();
console.log('After');