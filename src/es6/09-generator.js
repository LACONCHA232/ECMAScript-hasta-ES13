
function* generator(array){
    // Diferentes formas de ejecutar el "For"
    for(let i of array){
        yield i;
    }
    // for (let i = 0; i < array.length; i++) {
    //     yield array[i];
    // }
}

const it = generator([1,2,3,4,5,6,7,8,9,10]);

console.log(it.next().value);

for(let j =0; j < 10; j++){
    console.log(it.next().value);
}