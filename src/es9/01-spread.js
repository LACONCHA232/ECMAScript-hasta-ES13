
const user = {
    Username: 'DIEGO232',
    Age: 25,
    Country: 'MX'
}
const {Username, ...values} = user;

console.log(Username, values);
