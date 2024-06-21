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
