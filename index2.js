class heroi {
    constructor(name, age, tipo)
    {
        this.name = name;
        this.age = age;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque;

    switch (this.tipo) {
        case "Mago":
            ataque = "magia";
            break;
    
        case "Guerreiro":
            ataque = "a espada";
            break;
    
        case "Monge":
            ataque = "artes marciais";
            break;
    
        case "Ninja":
            ataque = "shuriken"
            break;
    
        default:
            ataque = "usou um ataque desconhecido";
            break;
        }
        
        console.log(`O ${this.tipo} ${this.name} de ${this.age} anos de idade atacou usando ${ataque}`)
        
    }
    
}

const heroi1 = new heroi("John", 50, "Mago");
const heroi2 = new heroi("Sally", 48, "Guerreiro");
const heroi3 = new heroi("Anna", 18, "Monge");
const heroi4 = new heroi("Johnny", 22, "Ninja");


heroi1.atacar();  
heroi2.atacar();  
heroi3.atacar();  
heroi4.atacar();  

