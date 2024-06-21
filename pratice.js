const bi = {
  i: "manthan",
};

const p = {
  l: "lddd",
};

p.__proto__ = bi;
console.log(p.i);

const ko = {
  kl() {
    return "gg";
  },
  ld: "kop",
};
const ma = {
  dd: "dhddh",
  __proto__: ko,
};
console.log(ma.ld);

console.log(ma.kl());

const ffff = Object.create(bi, {
  h: {
    value: "Ddd",
  },
});

console.log(ffff.i);

const animal = {
  eats: true,
};

const rabbit = {
  jumps: true,
};

Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.eats);

console.log(Object.getPrototypeOf(rabbit) === animal);
console.log(Math.pow(2, 2));

let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

const sumsal = function (department) {
  if (Array.isArray(department)) {
    // If it's an array, sum the salaries of its elements
    return department.reduce((acc, employee) => acc + employee.salary, 0);
  } else {
    // If it's an object, recursively sum the salaries of its properties
    let sum = 0;
    for (let subdep in department) {
      subdep;
      sum += sumsal(department[subdep]);
    }
    return sum;
  }
};

console.log(sumsal(company));

function sumto(no) {
  return (no * (1 + no)) / 2;
}

console.log(sumto(100));

function fibno(no) {
  if (no === 1) {
    return 1;
  } else {
    return no * fibno(no - 1);
  }
}

console.log(fibno(5));

(() => {
  console.log("dd");
})();

function greet() {
  console.log(`Hello, ${this.name}`);
}
let person = { name: "Alice" };
console.log(greet.call(person));

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

let obj = {};

console.log(obj.isArray);
let mixins = {
  sayhii() {
    return "hii";
  },
};

class h {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(h.prototype, mixins);

let instance = new h("example");

console.log(instance.sayhii());

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(random(1, 55));

console.log(1254e5);

function upc(str) {
  return str.toUpperCase();
}

console.log(upc("dddd"));

function check(str) {
  return str.includes("xxx") || str.includes("vigra");
}

console.log(check("free vigra"));
console.log(check("this does not contain it"));

function checkc(str, count) {
  if (str.length > count) {
    str = `${str.slice(0, count)}...`;
    return str;
  }
  return str;
}
console.log(checkc("This is a long string that needs to be truncated", 20));

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]

function sort(arr) {
  return arr.sort((a, b) => b - a);
}
console.log(sort(arr));

const opp = {
  "+": (a, b) => a + b,
};

function cal(str) {
  let [a, op, b] = str.split(" ");
  a = Number(a);
  b = Number(b);

  if (!opp[op] || isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return opp[op](a, b);
}
console.log(cal("5 + 4"));

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

function dd(user) {
  return {
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  };
}

let usersMapped = users.map(dd);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arrg = [1, 2, 3];
shuffle(arrg);
console.log(arrg);

const irer = function (arr) {
  return {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          if (i < arr.length) {
            return { value: arr[i++], done: false };
          } else {
            return { value: undefined, done: true };
          }
        },
      };
    },
  };
};

const iter = irer([1, 2, 3, 4, 5])[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

let {
  size: { width, height },
  items: [item1, item2],
  title = "Menu",
} = options;

console.log(title);
console.log(width);
console.log(height);
console.log(item1);
console.log(item2);
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
const mansaal = function (salaries) {
  let max = { name: "", sal: 0 };
  for ([n, s] of Object.entries(salaries)) {
    if (s > max.sal) {
      (max.name = n), (max.sal = s);
    }
  }
  return max;
};
const emp = mansaal(salaries);
emp;

let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(
  JSON.stringify(meetup, ["title", "participants", "name", "place", "number"])
);
