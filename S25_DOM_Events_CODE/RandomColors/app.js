const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
  let [r, g, b] = randomColor();
  const newColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;

  h1.style.color = r + g + b > 50 ? "black" : "white";
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
};
