function Animal() { }

Animal.prototype = {
    contructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
}

function Dog() { }

// only change code below this line
Dog.prototype = Object.create(Animal.prototype);

console.log(Dog instanceof Animal) //false

console.log(Dog.prototype.isPrototypeOf(Animal.prototype)) //false

let beagle = new Dog();

//Bird.prototype = Object.create(Animal.prototype);
//Remember that the prototype is like the "recipe" for creating an object.
//In a way, the recipe for Bird now includes all the key "ingredients" from Animal.