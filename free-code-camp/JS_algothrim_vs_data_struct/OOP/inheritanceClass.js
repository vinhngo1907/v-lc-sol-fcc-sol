class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log("eating...")
    }
}

class Bird extends Animal {
    constructor(name) {
        super(name);
    }

    fly() {
        console.log(`${this.name} is flying...`)
    }
}
const barrot = new Bird("Con vec");
barrot.fly()
//
function DongVat(name) {
    this.name = name;
    this.eat = function () {
        console.log(`${this.name} is eating...`)
    }
}

DongVat.prototype.run = function () {
    console.log(`${this.name} is running...`);
}

function Meo() {
    DongVat.apply(this, arguments);
}

Meo.prototype = new DongVat();
const tom = new Meo("Tom");
tom.run();
tom.eat()