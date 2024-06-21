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
