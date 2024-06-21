class Animal {
  constructor(name) {
    this.name = name;
  }
  jump() {
    return "jumped";
  }
}
((hooo) => {
  console.log(hooo);
})("hiii");

const human = {
  name: "manthan",
};

function hi() {
  console.log(`${this.name} says hiii`);
}

hi.apply(human);
hi.call(human);
const gg = hi.bind(human);
gg();

setTimeout(function () {
  hi.call(human);
}, 1000);

const test = function () {
  console.log("yolo");
};
setTimeout(test, 100);
// setInterval(test,10)

class Dog extends Animal {
  constructor(name, colour) {
    super(name);
    this.colour = colour;
  }

  static hi() {
    return "hii";
  }

  Bark() {
    return `${this.name} barked`;
  }
  #shakehand() {
    return `${this.name} shake hands`;
  }
}
console.log(Dog.hi()); //static method
const Dogo = new Dog("manny", "brown");
console.log(Dogo.jump());
console.log(Dogo.Bark());

class powerArray extends Array {
  isempty() {
    return this.length === 0;
  }
  isArray() {
    console.log("jjj");
  }
}

const k = new powerArray(1, 2, 3, 4, 5);

console.log(k.isempty());
k.isArray();

console.log(k instanceof powerArray);
