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

const lop = [1, 2, 3, 5, 6, 7, 8, 9];
const op = lop.filter((el) => el > 2);
console.log(op);

const red = lop.reduce((curr, el) => (curr += el));
console.log(red);
