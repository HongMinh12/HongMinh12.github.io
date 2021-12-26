class Person{
    name;
    age;
    address;
    gender;
    constructor(name, age, address, gender) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.gender = gender;
    }
    speak() {
        console.log(`
        Hello. I'm ${this.name}
        I'm ${this.age} years old. 
        I'm a ${this.gender} and I'm from ${this.address}
        `)
    }
}
const newPerson = new Person('Minh', 14, 'Hanoi', 'female');
console.log(newPerson)
newPerson.speak();

class Animal{
    color;
    numberOfLegs;
    gender;
    name;
    age;
    constructor(color, numberOfLegs, gender, name, age) {
        this.color = color;
        this.numberOfLegs = numberOfLegs;
        this.gender = gender;
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`Con ${this.name} dang an`)
    }
    isDangerous() {
        console.log((this.numberOfLegs > 3 || this.numberOfLegs === 0) ? 'Nguy hiem' : 'Khong nguy hiem');
    }
}
const newAnimal = new Animal('Vang', 4, 'Female', 'Bao', 10);
console.log(newAnimal)
newAnimal.eat();
newAnimal.isDangerous();


//static
class MyMath{
    static sum(a,b) {
        return a + b
    }
    static div(a,b) {
        return a / b
    }
}
console.log(MyMath.sum(30,6));
console.log(MyMath.div(12,4));


//ke thua
class Employee extends Person{
    constructor (name, age, address, gender){
        super(name, age, address, gender);
    }
    vehicle() {
        console.log(`${this.name} is going to work by bus`)
    }
}
const myEmployee = new Employee("Jane", 19, "Vancouver", "female");
console.log(myEmployee);
myEmployee.vehicle();

