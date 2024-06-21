import { asy } from "./promises.js"; //named
import add from "./errorhandeling.js"; //defult
asy("https://jsonplaceholder.typicode.com/posts/1")
  .then((res1) => {
    console.log(res1.title);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

console.log(add(5 + 4));
