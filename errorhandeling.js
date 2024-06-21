async function ge(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.title);
  } catch (err) {
    console.log(err.masssage);
  }
}

export default function add(x, y) {
  return x + y;
}
