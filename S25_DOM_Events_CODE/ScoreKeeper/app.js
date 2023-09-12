const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const playToSelection = document.querySelector("#playTo");

// instead of opponent, this could be a list of opponents.
function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (
      player.score === winningScore ||
      Math.abs(player.score - opponent.score) === 2
    ) {
      isGameOver = true;
      player.display.classList.toggle("has-text-success");
      opponent.display.classList.toggle("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}
// add options to selection
for (let i = 3; i <= 10; ++i) {
  let opt = document.createElement("option");
  opt.textContent = i;
  playToSelection.appendChild(opt);
}

let isGameOver = false;

let winningScore = 3;

p1.button.addEventListener("click", function (e) {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function (e) {
  updateScores(p2, p1);
});

resetButton.addEventListener("click", reset);

playToSelection.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

function reset() {
  isGameOver = false;

  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");

    // enable the buttons
    p.button.disabled = false;
  }
}
