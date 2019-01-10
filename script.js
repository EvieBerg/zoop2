var animalPopulation = 0;
function run(){
     var tigger = new Tiger("Tigger");
     var pooh = new Bear("Pooh");
     var unicorn = new Unicorn("Rarity");
     var giraffe = new Giraffe("Gemma");
    var bee = new Bee("Stinger");
    var animals = [tigger,pooh,giraffe,bee,unicorn];
    console.log(animals);
    var zookeeper = new Zookeeper("zoebot");
    var foodString = "meat";
    zookeeper.feedAnimals(animals, foodString);
    Animal.getPopulation();
    Tiger.getPopulation();
}

class Zookeeper{
    constructor(name){
        this.name = name;
    }
     feedAnimals(animals, foodString){
        var howMany = animals.length;
        console.log(this.name + " is feeding " + foodString+ " to " + howMany + "  of " + animalPopulation + " total animals.");
        for(var i = 0; i < howMany; i++){
            var somin = animals[i];
            somin.eat(foodString);
        }
    }
}

class Animal{
    constructor(name, food) {
        this.name = name;
        this.food= food;
        animalPopulation++;
    }
    sleep(name) {
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        (food == this.food) ? console.log("YUM!! "+ this.name + " wants more " + food): this.sleep(name);
    }
    static getPopulation() {
        console.log(animalPopulation) ;
    }
}
class Tiger extends Animal{
    constructor(name) {
            super(name, "meat");
        }
}
class Bear extends Animal{
    constructor(name) {
        super(name, "fish");
    }
    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}
class Unicorn extends Animal{
    constructor(name) {
        super(name, "marshmallows");
    }
    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
}
class Giraffe extends Animal{
    constructor(name) {
        super(name);
    }
    eat(food){
        if(food== "leaves"){
            console.log( this.name +" eats leaves");
            console.log(" YUM!!! " + this.name + " wants more leaves");
        }else{
            console.log(" YUCK!!! " + this.name + " will not eat " + food);

        }
    }
}
class Bee extends Animal{
    constructor(name) {
        super(name);
    }
    eat(food){
        if(food== "pollen"){
            console.log(this.name + " eats " + food);
        }else{
            console.log("YUCK!!!" + this.name + " will not eat " + food);
        }
    }
    sleep(name) {
        console.log(name + " never sleeps");
    }
}