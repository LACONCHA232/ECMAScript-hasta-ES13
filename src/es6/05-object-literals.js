


function newUser(name, age, country, Idsi){
    return{
        name,
        age,
        country,
        Id: Idsi,
    }
}

console.log(newUser('Oscar', 32, 'MX', 1));