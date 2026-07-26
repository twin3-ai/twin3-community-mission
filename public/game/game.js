const QUESTIONS = [
  {
    category: "Twin Matrix",
    question: 'What is the "Twin Matrix" in twin3?',
    options: [
      "A movie streaming channel",
      "A secure 256-dimensional map of human traits",
      "A hardware processor chip",
      "A public list of everyone's real names"
    ],
    correct: 1,
    explanation: "The Twin Matrix represents human traits, skills, and behavior patterns across 256 dimensions."
  },
  {
    category: "Humanity",
    question: "What activates contribution eligibility in the twin3 PoC system?",
    options: [
      "Owning a Twin Matrix SBT",
      "Changing a Discord username",
      "Sending one direct message",
      "Joining any Telegram group"
    ],
    correct: 0,
    explanation: "A Twin Matrix SBT is the eligibility gate before contribution rewards can be earned."
  },
  {
    category: "Privacy",
    question: "Which approach best protects a person's private data?",
    options: [
      "Publish every raw record",
      "Share passwords with the community",
      "Prove only what is needed",
      "Reuse one identity for everyone"
    ],
    correct: 2,
    explanation: "Selective proof minimizes disclosure while still allowing a claim to be verified."
  },
  {
    category: "Personal Agent",
    question: "What is the main purpose of a personal AI agent in twin3?",
    options: [
      "Replace the person's identity",
      "Act with permission for the person",
      "Reveal all wallet activity",
      "Control every community decision"
    ],
    correct: 1,
    explanation: "A personal agent assists and acts under the person's permission, identity, and policy boundaries."
  },
  {
    category: "Proof of Contribution",
    question: "What does $PoC represent in the contributor system?",
    options: [
      "A random lottery ticket",
      "A server subscription fee",
      "Auditable contribution value",
      "A Discord message count"
    ],
    correct: 2,
    explanation: "$PoC records auditable contribution value rather than raw activity alone."
  }
];

const PLAYER_COLORS = ["#3de596", "#ff7c6d", "#ffb84d", "#4adcf7", "#7267f8", "#f5f7ff"];
const PLAYERS = [
  { name: "Maya", initial: "M", ready: true },
  { name: "Leo", initial: "L", ready: true },
  { name: "Nate", initial: "N", ready: true },
  { name: "You", initial: "Y", ready: false },
  { name: "Kai", initial: "K", ready: false },
  { name: "Nova", initial: "N", ready: false }
];

const screens = [...document.querySelectorAll(".screen")];
const playerGrid = document.querySelector("#player-grid");
const readyButton = document.querySelector("#ready-button");
const countdownValue = document.querySelector("#countdown-value");
const countdownCopy = document.querySelector("#countdown-copy");
const answerGrid = document.querySelector("#answer-grid");
const timerValue = document.querySelector("#timer-value");
const timerRing = document.querySelector("#timer-ring");
const questionText = document.querySelector("#question-text");
const questionNumber = document.querySelector("#question-number");
const categoryPill = document.querySelector("#category-pill");
const missionProgress = document.querySelector("#mission-progress");
const runningReward = document.querySelector("#running-reward");
const answeringCount = document.querySelector("#answering-count");
const roomStatus = document.querySelector("#room-status");
const finalReward = document.querySelector("#final-reward");
const finalScore = document.querySelector("#final-score");
const resultTitle = document.querySelector("#result-title");
const resultSubtitle = document.querySelector("#result-subtitle");
const rankMedallion = document.querySelector("#rank-medallion");
const reviewPanel = document.querySelector("#review-panel");
const musicToggle = document.querySelector("#music-toggle");
const soundToggle = document.querySelector("#sound-toggle");

let questionIndex = 0;
let correctAnswers = 0;
let selectedAnswers = [];
let timerId = null;
let timeLeft = 20;
let musicEnabled = false;
let soundEnabled = true;
let audioContext = null;
let ambientTimer = null;

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
}

function renderPlayers() {
  playerGrid.innerHTML = PLAYERS.map((player, index) => `
    <article class="player ${player.ready ? "ready" : ""}">
      <div class="avatar" style="background:${PLAYER_COLORS[index]}">${player.initial}</div>
      <strong>${player.name}</strong>
      <small>${player.ready ? "Synchronized" : "Connecting"}</small>
    </article>
  `).join("");
  document.querySelector("#ready-count").textContent = PLAYERS.filter(player => player.ready).length;
  document.querySelector("#mini-players").innerHTML = PLAYERS.map((_, index) =>
    `<span class="mini-avatar" style="background:${PLAYER_COLORS[index]}"></span>`
  ).join("");
}

function getAudioContext() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function tone(frequency, duration = 0.12, type = "sine", volume = 0.05, delay = 0) {
  if (!soundEnabled && type !== "ambient") return;
  const ctx = getAudioContext();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  const start = ctx.currentTime + delay;
  oscillator.type = type === "ambient" ? "sine" : type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function startAmbient() {
  stopAmbient();
  if (!musicEnabled) return;
  const sequence = [110, 146.83, 164.81, 146.83];
  let step = 0;
  tone(sequence[step], 1.6, "ambient", 0.018);
  ambientTimer = setInterval(() => {
    step = (step + 1) % sequence.length;
    tone(sequence[step], 1.6, "ambient", 0.018);
  }, 1600);
}

function stopAmbient() {
  if (ambientTimer) clearInterval(ambientTimer);
  ambientTimer = null;
}

function playReadySound() {
  tone(330, 0.18, "sine", 0.05);
  tone(494, 0.25, "sine", 0.05, 0.12);
}

function playCountdownSound(value) {
  tone(value === 0 ? 660 : 260 + (3 - value) * 90, value === 0 ? 0.45 : 0.14, "triangle", 0.07);
}

function playCorrect() {
  tone(440, 0.18, "sine", 0.06);
  tone(660, 0.3, "sine", 0.06, 0.1);
}

function playWrong() {
  tone(180, 0.18, "sawtooth", 0.035);
}

function playVictory() {
  [392, 523.25, 659.25, 783.99].forEach((frequency, index) =>
    tone(frequency, 0.55, "triangle", 0.06, index * 0.12)
  );
}

function startCountdown() {
  roomStatus.textContent = "Synchronizing";
  showScreen("countdown-screen");
  let value = 3;
  countdownValue.textContent = value;
  countdownCopy.textContent = "Locking the mission room...";
  playCountdownSound(value);

  const interval = setInterval(() => {
    value -= 1;
    if (value > 0) {
      countdownValue.textContent = value;
      countdownValue.animate(
        [{ transform: "scale(.6)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }],
        { duration: 420, easing: "cubic-bezier(.2,.8,.2,1)" }
      );
      countdownCopy.textContent = value === 2 ? "Connecting 256 dimensions..." : "Identity synchronized.";
      playCountdownSound(value);
      return;
    }
    clearInterval(interval);
    countdownValue.textContent = "GO";
    countdownCopy.textContent = "Mission live";
    playCountdownSound(0);
    setTimeout(() => {
      showScreen("quiz-screen");
      roomStatus.textContent = "Mission live";
      renderQuestion();
    }, 650);
  }, 900);
}

function renderQuestion() {
  clearInterval(timerId);
  const item = QUESTIONS[questionIndex];
  questionNumber.textContent = `Question ${questionIndex + 1} of ${QUESTIONS.length}`;
  questionText.textContent = item.question;
  categoryPill.textContent = item.category;
  missionProgress.style.width = `${((questionIndex + 1) / QUESTIONS.length) * 100}%`;
  runningReward.textContent = `${correctAnswers * 5} $PoC`;
  answeringCount.textContent = Math.max(2, 5 - questionIndex);
  answerGrid.innerHTML = item.options.map((option, index) => `
    <button class="answer-button" data-index="${index}" type="button">
      <span class="letter">${String.fromCharCode(65 + index)}</span>
      <span>${option}</span>
    </button>
  `).join("");
  answerGrid.querySelectorAll(".answer-button").forEach(button => {
    button.addEventListener("click", () => selectAnswer(Number(button.dataset.index)));
  });
  startTimer();
}

function startTimer() {
  timeLeft = 20;
  updateTimer();
  timerId = setInterval(() => {
    timeLeft -= 1;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timerId);
      selectAnswer(-1);
    }
  }, 1000);
}

function updateTimer() {
  timerValue.textContent = timeLeft;
  timerRing.style.strokeDashoffset = 113.1 * (1 - timeLeft / 20);
  timerRing.style.stroke = timeLeft <= 5 ? "var(--danger)" : "var(--cyan)";
}

function selectAnswer(choice) {
  clearInterval(timerId);
  const item = QUESTIONS[questionIndex];
  const buttons = [...answerGrid.querySelectorAll(".answer-button")];
  buttons.forEach(button => button.disabled = true);
  const isCorrect = choice === item.correct;
  selectedAnswers.push({ item, choice, isCorrect });

  if (choice >= 0) buttons[choice].classList.add("locked");
  setTimeout(() => {
    if (choice >= 0) buttons[choice].classList.add(isCorrect ? "correct" : "wrong");
    buttons[item.correct].classList.add("correct");
    if (isCorrect) {
      correctAnswers += 1;
      runningReward.textContent = `${correctAnswers * 5} $PoC`;
      playCorrect();
    } else {
      playWrong();
      document.querySelector(".question-stage").animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-5px)" }, { transform: "translateX(5px)" }, { transform: "translateX(0)" }],
        { duration: 260 }
      );
    }
    setTimeout(nextQuestion, 1200);
  }, 380);
}

function nextQuestion() {
  questionIndex += 1;
  if (questionIndex < QUESTIONS.length) {
    renderQuestion();
    return;
  }
  finishMission();
}

function finishMission() {
  clearInterval(timerId);
  stopAmbient();
  const rank = correctAnswers >= 4 ? 1 : correctAnswers >= 2 ? 2 : 3;
  rankMedallion.textContent = rank;
  finalReward.textContent = `${correctAnswers * 5} $PoC`;
  finalScore.textContent = `${correctAnswers} / ${QUESTIONS.length}`;
  resultTitle.textContent = correctAnswers >= 4 ? "Mission complete" : "Matrix training complete";
  resultSubtitle.textContent = correctAnswers >= 4
    ? "Your identity held steady through the Matrix."
    : "Review the dimensions and return stronger.";
  showScreen("result-screen");
  roomStatus.textContent = "Mission complete";
  playVictory();
}

function resetGame() {
  clearInterval(timerId);
  correctAnswers = 0;
  questionIndex = 0;
  selectedAnswers = [];
  reviewPanel.hidden = true;
  PLAYERS.forEach((player, index) => player.ready = index < 3);
  readyButton.disabled = false;
  readyButton.innerHTML = "<span>Synchronize &amp; Ready</span><small>Join the mission</small>";
  renderPlayers();
  showScreen("lobby-screen");
  roomStatus.textContent = "Mission lobby";
  startAmbient();
}

readyButton.addEventListener("click", () => {
  getAudioContext();
  PLAYERS[3].ready = true;
  PLAYERS[4].ready = true;
  PLAYERS[5].ready = true;
  readyButton.disabled = true;
  readyButton.innerHTML = "<span>Identity synchronized</span><small>Opening mission...</small>";
  renderPlayers();
  playReadySound();
  setTimeout(startCountdown, 850);
});

document.querySelector("#play-again").addEventListener("click", resetGame);
document.querySelector("#review-answers").addEventListener("click", () => {
  reviewPanel.hidden = !reviewPanel.hidden;
  reviewPanel.innerHTML = selectedAnswers.map((answer, index) => {
    const selected = answer.choice >= 0 ? answer.item.options[answer.choice] : "No answer";
    return `<div class="review-row"><strong>${index + 1}. ${answer.isCorrect ? "Correct" : "Review"}</strong><br>${selected}<br><span>${answer.item.explanation}</span></div>`;
  }).join("");
});

musicToggle.addEventListener("click", () => {
  musicEnabled = !musicEnabled;
  musicToggle.classList.toggle("muted", !musicEnabled);
  document.querySelector("#music-icon").textContent = musicEnabled ? "♫" : "♪";
  if (musicEnabled) {
    getAudioContext();
    startAmbient();
  } else {
    stopAmbient();
  }
});

soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundToggle.classList.toggle("muted", !soundEnabled);
  document.querySelector("#sound-icon").textContent = soundEnabled ? "◖" : "×";
  if (soundEnabled) tone(520, 0.12, "sine", 0.04);
});

function setupMatrixField() {
  const canvas = document.querySelector("#matrix-field");
  const ctx = canvas.getContext("2d");
  const nodes = [];
  let width = 0;
  let height = 0;
  let dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    nodes.length = 0;
    const count = Math.min(88, Math.max(42, Math.floor(width * height / 18000)));
    for (let i = 0; i < count; i += 1) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1 + Math.random() * 1.4
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(112, 126, 172, 0.12)";
    ctx.lineWidth = 0.7;
    for (let x = 0; x < width; x += 56) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for (let y = 0; y < height; y += 56) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }

    nodes.forEach((node, index) => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      for (let j = index + 1; j < nodes.length; j += 1) {
        const other = nodes[j];
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 145) {
          ctx.strokeStyle = `rgba(101, 115, 205, ${0.14 * (1 - distance / 145)})`;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = index % 5 === 0 ? "rgba(74,220,247,.75)" : "rgba(126,112,250,.6)";
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

renderPlayers();
setupMatrixField();
musicToggle.classList.add("muted");
