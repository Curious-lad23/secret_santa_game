let currentQuestion = 0;
let score = 0;

const questions = [
  {
    q: "🎅 What do people traditionally leave for Santa?",
    options: ["Milk & Cookies", "Pizza", "Coffee", "Chocolate"],
    answer: 0
  },
  {
    q: "🎄 Which month is Christmas celebrated?",
    options: ["November", "October", "December", "January"],
    answer: 2
  },
  {
    q: "🎁 What is Secret Santa mainly about?",
    options: ["Winning prizes", "Surprising someone", "Office competition", "Shopping"],
    answer: 1
  }
];

function startGame() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.q;

  const buttons = document.querySelectorAll(".options button");
  buttons.forEach((btn, i) => {
    btn.innerText = q.options[i];
  });
}

function selectAnswer(index) {
  if (index === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  console.log("Quiz finished. Score:", score);

  if (score >= 2) {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("reward").classList.remove("hidden");

    // 🎉 CONFETTI
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  } else {
    document.getElementById("quizMessage").innerText =
      "😅 Almost there! Try again.";
    currentQuestion = 0;
    score = 0;
    showQuestion();
  }
}



function copyVoucher() {
  const text = document.getElementById("voucherCode").innerText.replace("🎫 ", "");
  navigator.clipboard.writeText(text);
  alert("Voucher code copied! 🎁");
}

function restartGame() {
  document.getElementById("reward").classList.add("hidden");
  document.getElementById("welcome").classList.remove("hidden");
}
