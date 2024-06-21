function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(2)(3));

//partial call

const res = add(5);
console.log(res(5));

function flog(time) {
  return function (code) {
    return function (message) {
      return [time, code, message];
    };
  };
}

const date = new Date();
console.log(flog(date.getDate())(200)("ok"));
