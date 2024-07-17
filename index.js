let totalSeconds;
let interval;

function chrono() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  countdownDisplay.textContent = `${minutes} : ${seconds
    .toString()
    .padStart(2, "0")}`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "C'est terminé !";
    clearInterval(interval);
  }

  //ajouter un 0 devant un chiffre seul pedStart (2, "0")

  //console.log((seconds -= 1));
}

document.addEventListener("submit", (e) => {
  e.preventDefault();
  totalSeconds = choice.value * 60;
  choice.value = "";

  //Pour éviter qu'il y ai plusieurs interval d'un coup
  clearInterval(interval);
  interval = setInterval(chrono, 1000);
});
