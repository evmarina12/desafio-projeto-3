class hero { 
    constructor (name, age, type) {
    this.name = name;
     this.age = age;
      this.type = type;
    }

    attack() {
    let attack  
    switch (this.type) {
        case "mago": 
        attack = "magia" 
    break;
    
    case "guerreiro": 
    attack = "espada"
    break;
    
    case "monge": 
    attack = "artes marciais"
    break;
   
    case "ninja":
    attack = "shuriken"
    break;
     
    default:
    break;
        
}
    
    console.log(`O ${this.type} atacou usando ${attack}`);
    
    }

}
    // Testes
    const hero1 = new hero("Aragorn", 30, "guerreiro");hero1.attack();
    const hero2 = new hero("Mestre dos Magos", 1000000, "mago");hero2.attack();
    const hero3 = new hero("Ninja", 67, "ninja");hero3.attack();
    const hero4 = new hero("Monge", 67, "monge");hero4.attack();