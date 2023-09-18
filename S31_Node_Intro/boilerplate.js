const fs = require("fs");
// get the first argument. Default is Project
const foldername = process.argv[2] || "Project";
// // Create Test/ asyn version
// fs.mkdir("Test", { recursive: true }, (err) => {
//   if (err) throw err;
// });

// sync version
fs.mkdirSync(foldername);

const dataCss =
  ".pokemon {display: inline-block;\ntext-align: center;}\n.pokemon img {display: block}";
const dataApp = `
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = \`#\${i}\`;
    const newImg = document.createElement('img');
    newImg.src = \`\${baseURL}\${i}.png\`

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}
`;

const dataHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokemon</title>
    <link rel="stylesheet" href="app.css">
</head>

<body>
    <h1>Look at my pokemon!</h1>
    <section id="container"></section>
    <script src="app.js"></script>
</body>

</html>`;

try {
  fs.writeFileSync(`${foldername}/index.html`, dataHTML);
  fs.writeFileSync(`${foldername}/app.js`, dataApp);
  fs.writeFileSync(`${foldername}/styles.css`, dataCss);
} catch (e) {
  console.log(e);
}
