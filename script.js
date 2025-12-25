let canClick = false;
let timerStarted = false;

function startGame() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("message").innerText = "";
  document.getElementById("gift").classList.remove("green");

  canClick = false;
  timerStarted = true;

  const delay = Math.random() * 2000 + 2000;

  setTimeout(() => {
    if (timerStarted) {
      document.getElementById("gift").classList.add("green");
      canClick = true;
    }
  }, delay);
}

function checkClick() {
  if (!timerStarted) return;

  if (canClick) {
    document.getElementById("message").innerText =
      "🎉 You win! Surprise unlocked!";
  } else {
    document.getElementById("message").innerText =
      "❌ Too soon! Try again.";
  }

  timerStarted = false;
}
