// reference type
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 === object2); // true
console.log(object1 === object3); // false
object1.value = 15;
console.log(object2.value); // 15

// context vs scope
// context tells you where we are within the object
// this -> means what is the object env that we are in right now
const object4 = {
  a() {
    console.log(this);
  }
};
object4.a();

// instantiation - when you make a copy of the object and reuse the code
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}. I am a ${this.type}`);
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shaun', 'Dark Magic');

wizard2.introduce();
wizard1.introduce();
