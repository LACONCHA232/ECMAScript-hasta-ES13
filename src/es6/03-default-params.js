

// FORMA DE PONER PARAMETROS JUNTO CON SU VALOR A TOMAR EN CUENTA POR SI NO HAY NINGUN PARAMETRO 
function newUser(name, age, country){
    var name = name || "Diego";
    var age = age || 50;
    var country = country || "Mexico";
    console.log(name, age, country);
}
newUser();
newUser('Miguel', 20, 'Alemania');


// FORMA DE PONER PARAMETROS ADEMAS DE DARLE UN VALOR POR DEFECTO O QUE INCLUSO SE PUEDA SOBREESCRIBIR 
function newAdmin(name = 'Diego', age = 100, country = 'EU'){
    console.log(name, age,country);
}
newAdmin();
newAdmin('Logan', 15, 'Canada');