
// Clase
class User {

    metodo() {
        return 'Hello World';
    }
}
// Instancia de las clase
const User1 = new User();
console.log(User1.metodo());

const User3000 = new User();
console.log(User3000.metodo());


// this with Constructors

class User {
    constructor(name){
        this.name = name;
    }
    metodo(){
        return 'hello';
    }
    Metodo2(){
        return `${this.metodo()} ${this.name}`;	
    }
}


const User2 = new User('Diego');
console.log(User2.Metodo2());


