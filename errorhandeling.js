async function ge(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.title);
  } catch (err) {
    console.log(err.masssage);
  }
}

ge("https://jsonplaceholder.typicode.com/posts/1");
