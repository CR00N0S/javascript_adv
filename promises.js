const pro = new Promise((res, rej) => res(2));

pro.then((e) => console.log(e));

const rej2 = new Promise((res, rej) => {
  const t = Math.random();
  if (t < 0.5) {
    res("resolve");
  } else {
    rej("reject");
  }
});

rej2
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

function de(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

de(1000).then(() => console.log(`resolved`));

let u = fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((e) => {
    return e.json();
  })
  .then((d) => {
    console.log(d.title);
  })
  .catch((err) => {
    console.log(err.message);
  });

/* const thrw = new Promise((res, rej) => {
  throw new Error("error");
}).then((e) => console.log(e)); */

const promise1 = new Promise((resolve, reject) => {
  resolve("Immediate resolution");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved after 1 second");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve after 2 seconds");
  }, 2000);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    values.forEach((value, index) => {
      console.log(`Promise ${index + 1}: ${value}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });

Promise.allSettled([promise1, promise2, promise3]).then((el) =>
  console.log(el)
);

Promise.race([promise1, promise2, promise3]).then((el) => console.log(el));
Promise.any([promise1, promise2, promise3]).then((el) => console.log(el));

export const asy = async function (url) {
  const res = await fetch(url);
  const data = await res.json();
  return data; // Return the parsed JSON data
};

asy("https://jsonplaceholder.typicode.com/posts/1")
  .then((res1) => {
    console.log(res1.title);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

async function a_request(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.title);
  } catch (err) {
    console.log(err.masssage);
  }
}

a_request("https://jsonplaceholder.typicode.com/posts/1");
