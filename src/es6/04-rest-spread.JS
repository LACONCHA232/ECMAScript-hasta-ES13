
// ARRAY DESTRUCTING
let fruit = ['apple', 'Bannana'];
let [a,b] = fruit;
console.log(a, fruit[1]);


// OBJECT DESTRUCTING
let user = {
    username: 'Diego',
    age: 20,
}
let {username, age} = user;
console.log(username, age);


// spread operator
let person = { name: 'Diego', age: 20 };
let country = 'MX';

let data = {id: 1, ...person, country};
console.log(data);


// rest operator

function sum(num, ...values){
    console.log(num, values);
    console.log(num + values[0]);
}


sum(1, 1,2,3);