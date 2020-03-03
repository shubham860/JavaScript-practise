class Occupation{
    constructor(name,occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    printOccupation(){
        const {name} = this;
        return `My name is ${name} `;
    }
}

class Manoj extends Occupation{
    constructor(name,occupation,age=52) {
        super(name,occupation);
        this.age = age;
    }

    greet(){
        return `My name is ${this.name} and i'm ${this.occupation}`
    }
}


const ppl  = new Manoj('rachana','utubher',22);
console.log(ppl.printOccupation());
console.log(ppl.greet());
