const QUESTION_BANK = [
  {
    id: "web3-001", domain: "Web3", type: "choice",
    question: "What does self-custody mean in a Web3 wallet?",
    options: ["The user controls the wallet keys", "A social platform stores the password", "A validator owns every account", "The wallet cannot sign transactions"],
    correct: 0, explanation: "Self-custody means the user controls the credentials that authorize transactions."
  },
  {
    id: "web3-002", domain: "Web3", type: "binary",
    question: "A Soulbound Token is designed to be freely traded between wallets.",
    options: ["True", "False"], correct: 1,
    explanation: "Soulbound credentials are designed to remain bound to an identity rather than circulate as transferable assets."
  },
  {
    id: "web3-003", domain: "Web3", type: "choice",
    question: "Which property makes a blockchain record independently auditable?",
    options: ["Shared verifiable history", "Hidden administrator edits", "Private browser cookies", "Manual spreadsheet approval"],
    correct: 0, explanation: "A shared ledger lets independent participants verify the same transaction history."
  },
  {
    id: "web3-004", domain: "Web3", type: "sequence",
    question: "Which sequence best describes a signed blockchain action?",
    options: ["Create intent → sign → broadcast → confirm", "Confirm → delete → sign → broadcast", "Broadcast → create keys → confirm → sign", "Sign → confirm → create intent → broadcast"],
    correct: 0, explanation: "The user forms an intent, signs it, broadcasts it, and waits for network confirmation."
  },
  {
    id: "web3-005", domain: "Web3", type: "choice",
    question: "What is the safest way to prove an attribute without exposing unrelated personal data?",
    options: ["Selective disclosure", "Publishing the full identity file", "Sharing a recovery phrase", "Using the same password everywhere"],
    correct: 0, explanation: "Selective disclosure proves only the attribute required for a specific interaction."
  },
  {
    id: "web3-006", domain: "Web3", type: "binary",
    question: "A public wallet address should be treated as if it reveals no behavioral information.",
    options: ["True", "False"], correct: 1,
    explanation: "Public addresses can expose transaction patterns and should not be assumed to be behaviorally private."
  },
  {
    id: "web3-007", domain: "Web3", type: "choice",
    question: "What is the main purpose of a smart contract?",
    options: ["Execute agreed rules deterministically", "Replace every user decision", "Store private keys publicly", "Guarantee asset prices"],
    correct: 0, explanation: "Smart contracts execute encoded rules when their defined conditions are met."
  },
  {
    id: "web3-008", domain: "Web3", type: "sequence",
    question: "Which order best represents a verifiable credential flow?",
    options: ["Issuer creates → holder stores → verifier checks", "Verifier creates → issuer deletes → holder guesses", "Holder verifies → issuer stores → verifier signs", "Network deletes → holder issues → verifier stores"],
    correct: 0, explanation: "An issuer creates the credential, a holder controls it, and a verifier checks its proof."
  },
  {
    id: "web3-009", domain: "Web3", type: "choice",
    question: "Why is an on-chain transaction normally considered final only after confirmation?",
    options: ["The network must include and settle it", "The browser needs to save a screenshot", "A social account must repost it", "The wallet must reveal its private key"],
    correct: 0, explanation: "Confirmation shows that the network has accepted the transaction into its canonical history."
  },
  {
    id: "agent-001", domain: "AI Agent", type: "choice",
    question: "What separates an AI agent from a simple text generator?",
    options: ["It can pursue goals using tools and feedback", "It always produces longer answers", "It owns every dataset it reads", "It never needs permission boundaries"],
    correct: 0, explanation: "Agents combine reasoning with tools, state, and feedback to pursue a defined goal."
  },
  {
    id: "agent-002", domain: "AI Agent", type: "binary",
    question: "An agent should be allowed to take every external action without user approval.",
    options: ["True", "False"], correct: 1,
    explanation: "External actions need explicit permissions and risk-appropriate approval boundaries."
  },
  {
    id: "agent-003", domain: "AI Agent", type: "choice",
    question: "Which record is most useful when auditing an agent's decision?",
    options: ["A trace of inputs, tools, and outputs", "Only the agent's display name", "A decorative profile image", "The user's screen brightness"],
    correct: 0, explanation: "An auditable trace connects the agent's inputs, tool calls, decisions, and results."
  },
  {
    id: "agent-004", domain: "AI Agent", type: "sequence",
    question: "Which sequence best describes a responsible agent loop?",
    options: ["Observe → plan → act → verify", "Act → forget → guess → repeat", "Verify → hide → act → delete", "Plan → publish secrets → observe → act"],
    correct: 0, explanation: "A responsible agent observes context, plans, acts within permission, and verifies the result."
  },
  {
    id: "agent-005", domain: "AI Agent", type: "choice",
    question: "Why should an agent have a scoped identity?",
    options: ["To prove who authorized it and what it may do", "To remove all accountability", "To make every action anonymous", "To share one credential with every agent"],
    correct: 0, explanation: "Scoped identity links authority and permissions to a specific agent context."
  },
  {
    id: "agent-006", domain: "AI Agent", type: "choice",
    question: "What does human-in-the-loop control add to a high-risk workflow?",
    options: ["A review point before consequential action", "A promise that models never fail", "Unlimited access to private systems", "Automatic approval of every output"],
    correct: 0, explanation: "Human review creates an explicit control point before consequential actions are finalized."
  },
  {
    id: "agent-007", domain: "AI Agent", type: "binary",
    question: "A high model confidence score is enough to prove that an answer is factually correct.",
    options: ["True", "False"], correct: 1,
    explanation: "Confidence is not evidence; important claims still require source and outcome verification."
  },
  {
    id: "agent-008", domain: "AI Agent", type: "choice",
    question: "What is the strongest defense against an agent using the wrong tool?",
    options: ["Allowlist tools and validate each action", "Give it every credential", "Hide all execution logs", "Increase response length"],
    correct: 0, explanation: "Tool allowlists and action validation constrain what the agent can execute."
  },
  {
    id: "agent-009", domain: "AI Agent", type: "sequence",
    question: "Which order best represents reliable agent memory?",
    options: ["Capture → structure → retrieve → verify", "Retrieve → invent → erase → capture", "Verify → discard → capture → hide", "Structure → publish → forget → retrieve"],
    correct: 0, explanation: "Useful memory is captured, structured, retrieved when relevant, and checked before use."
  },
  {
    id: "matrix-001", domain: "Twin Matrix", type: "choice",
    question: "What does the Twin Matrix represent?",
    options: ["A multidimensional representation of a person", "A public list of legal names", "A transferable loyalty coupon", "A single social-media score"],
    correct: 0, explanation: "The Twin Matrix represents human attributes and behavior across multiple dimensions."
  },
  {
    id: "matrix-002", domain: "Twin Matrix", type: "choice",
    question: "Why is the Twin Matrix designed around many dimensions instead of one score?",
    options: ["Human capability cannot be reduced to one trait", "One score is too expensive to display", "Blockchains require exactly 256 wallets", "Every user must answer the same way"],
    correct: 0, explanation: "A multidimensional model preserves distinct aspects of identity, capability, and behavior."
  },
  {
    id: "matrix-003", domain: "Twin Matrix", type: "binary",
    question: "In twin3, holding an SBT is the eligibility gate for earning contributor $PoC.",
    options: ["True", "False"], correct: 0,
    explanation: "The Twin Matrix SBT connects contribution eligibility to a verified human identity."
  },
  {
    id: "matrix-004", domain: "Twin Matrix", type: "choice",
    question: "What does Proof of Contribution aim to measure?",
    options: ["Auditable contribution value", "Raw message volume alone", "Token price predictions", "The age of a Discord account"],
    correct: 0, explanation: "$PoC connects rewards to evidence-backed contribution rather than activity volume alone."
  },
  {
    id: "matrix-005", domain: "Twin Matrix", type: "sequence",
    question: "Which sequence best represents twin3 contribution eligibility?",
    options: ["Verify human → obtain SBT → contribute → settle $PoC", "Contribute → sell identity → obtain SBT → verify", "Settle $PoC → create account → skip verification → contribute", "Obtain reward → delete evidence → verify → contribute"],
    correct: 0, explanation: "Human verification and SBT eligibility come before contribution settlement."
  },
  {
    id: "matrix-006", domain: "Twin Matrix", type: "choice",
    question: "What is the role of Humanity in the contribution system?",
    options: ["Provide a global human trust foundation", "Replace every role-specific signal", "Set a market price for identity", "Count only Discord reactions"],
    correct: 0, explanation: "Humanity acts as a shared trust foundation while each role measures different contribution signals."
  },
  {
    id: "matrix-007", domain: "Twin Matrix", type: "choice",
    question: "Why does twin3 keep contribution roles as separate dimensions?",
    options: ["One person may contribute in several distinct ways", "Each person may hold only one capability", "Roles exist only as decorative colors", "Every action must receive the same reward"],
    correct: 0, explanation: "Separate roles preserve different forms of contribution while allowing one person to participate across them."
  },
  {
    id: "matrix-008", domain: "Twin Matrix", type: "choice",
    question: "Which statement best describes Experiencer contribution?",
    options: ["Learning, participating, and returning consistently", "Only writing production code", "Only funding the project", "Only reposting announcements"],
    correct: 0, explanation: "Experiencer recognizes verified participation, learning, and sustained engagement."
  },
  {
    id: "matrix-009", domain: "Twin Matrix", type: "choice",
    question: "Why must a contribution event keep evidence?",
    options: ["So its source and settlement can be audited", "So every user sees private data", "So rewards can be changed invisibly", "So one action can be paid repeatedly"],
    correct: 0, explanation: "Evidence lets the system explain what happened, who contributed, and how settlement was derived."
  },
  {
    id: "matrix-010", domain: "Twin Matrix", type: "sequence",
    question: "Which sequence best describes a trustworthy $PoC event?",
    options: ["Capture evidence → validate eligibility → price event → settle once", "Settle twice → hide evidence → validate later → delete", "Price randomly → publish secrets → settle → invent evidence", "Validate nickname → ignore identity → duplicate event → settle"],
    correct: 0, explanation: "A trustworthy event is evidenced, eligibility-gated, priced by rule, and settled idempotently."
  },
  {
    id: "matrix-011", domain: "Twin Matrix", type: "choice",
    question: "What should happen when a contribution event is replayed?",
    options: ["The existing settlement should be returned", "A second reward should be issued", "The identity should be deleted", "The evidence should be ignored"],
    correct: 0, explanation: "Idempotent settlement prevents a replayed event from generating duplicate rewards."
  },
  {
    id: "matrix-012", domain: "Twin Matrix", type: "choice",
    question: "What does a role-specific Signal Breakdown provide?",
    options: ["Evidence behind an individual's contribution result", "A generic copy of system rules", "A list of private wallet keys", "A prediction of token price"],
    correct: 0, explanation: "Signal Breakdown explains the person's own measured contribution and its underlying evidence."
  }
];

const STORAGE_KEY = "twin3-community-mission-v2";
const MISSION_SIZE = 10;
const REWARD_PER_CORRECT = 5;
const QUESTION_SECONDS = 20;
const TYPE_LABELS = { choice: "Signal Scan", binary: "Truth Gate", sequence: "Sequence Lock" };
const MEMORY_FALLBACK = {};

const screens = [...document.querySelectorAll(".screen")];
const readyButton = document.querySelector("#ready-button");
const answerGrid = document.querySelector("#answer-grid");
const questionText = document.querySelector("#question-text");
const questionNumber = document.querySelector("#question-number");
const categoryPill = document.querySelector("#category-pill");
const interactionLabel = document.querySelector("#interaction-label");
const questionInstruction = document.querySelector("#question-instruction");
const missionProgress = document.querySelector("#mission-progress");
const runningReward = document.querySelector("#running-reward");
const streakValue = document.querySelector("#streak-value");
const timerValue = document.querySelector("#timer-value");
const timerRing = document.querySelector("#timer-ring");
const revealPanel = document.querySelector("#reveal-panel");
const revealSymbol = document.querySelector("#reveal-symbol");
const revealLabel = document.querySelector("#reveal-label");
const revealAnswer = document.querySelector("#reveal-answer");
const revealExplanation = document.querySelector("#reveal-explanation");
const nextQuestionButton = document.querySelector("#next-question");
const dimensionNodes = document.querySelector("#dimension-nodes");
const roomStatus = document.querySelector("#room-status");
const musicToggle = document.querySelector("#music-toggle");
const soundToggle = document.querySelector("#sound-toggle");

let mission = [];
let questionIndex = 0;
let correctAnswers = 0;
let currentStreak = 0;
let bestStreak = 0;
let selectedAnswers = [];
let timerId = null;
let timeLeft = QUESTION_SECONDS;
let musicEnabled = false;
let soundEnabled = true;
let audioContext = null;
let ambientTimer = null;

function loadJourney() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { seen: [], missions: [], totalCorrect: 0 };
  } catch {
    return MEMORY_FALLBACK.journey || { seen: [], missions: [], totalCorrect: 0 };
  }
}

function saveJourney(journey) {
  MEMORY_FALLBACK.journey = journey;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(journey));
  } catch {
    // In-memory state keeps the preview playable when storage is unavailable.
  }
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function selectMission() {
  const journey = loadJourney();
  const unseen = QUESTION_BANK.filter(question => !journey.seen.includes(question.id));
  if (unseen.length === 0) return [];

  const byDomain = {
    "Web3": shuffle(unseen.filter(question => question.domain === "Web3")),
    "AI Agent": shuffle(unseen.filter(question => question.domain === "AI Agent")),
    "Twin Matrix": shuffle(unseen.filter(question => question.domain === "Twin Matrix"))
  };
  const balanced = [];
  const targets = [["Twin Matrix", 4], ["Web3", 3], ["AI Agent", 3]];
  targets.forEach(([domain, count]) => balanced.push(...byDomain[domain].slice(0, count)));

  const selectedIds = new Set(balanced.map(question => question.id));
  const remainder = shuffle(unseen.filter(question => !selectedIds.has(question.id)));
  return shuffle([...balanced, ...remainder].slice(0, Math.min(MISSION_SIZE, unseen.length)));
}

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateLobby() {
  const journey = loadJourney();
  const unseen = Math.max(0, QUESTION_BANK.length - journey.seen.length);
  document.querySelector("#pool-count").textContent = `${unseen} unseen`;
  document.querySelector("#journey-count").textContent = `${journey.seen.length} / ${QUESTION_BANK.length}`;
  document.querySelector("#journey-progress").style.width = `${(journey.seen.length / QUESTION_BANK.length) * 100}%`;
  readyButton.disabled = unseen === 0;
  readyButton.querySelector("span").textContent = unseen === 0 ? "Journey complete" : "Synchronize & Enter";
  readyButton.querySelector("small").textContent = unseen === 0 ? "New reviewed questions unlock future missions" : "One player is enough to launch";
}

function updateLaunchClock() {
  const now = new Date();
  const next = new Date(now);
  next.setMinutes(60, 0, 0);
  const diff = Math.max(0, next - now);
  const minutes = String(Math.floor(diff / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
  document.querySelector("#launch-clock").textContent = `${minutes}:${seconds}`;
}

function getAudioContext() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function tone(frequency, duration = 0.12, type = "sine", volume = 0.04, delay = 0) {
  if (!soundEnabled && type !== "ambient") return;
  const context = getAudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const start = context.currentTime + delay;
  oscillator.type = type === "ambient" ? "sine" : type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function playCorrect() {
  tone(440, 0.18, "sine", 0.055);
  tone(660, 0.28, "sine", 0.055, 0.1);
}

function playWrong() {
  tone(170, 0.2, "sawtooth", 0.025);
}

function playVictory() {
  [392, 523.25, 659.25, 783.99].forEach((frequency, index) => tone(frequency, 0.5, "triangle", 0.05, index * 0.12));
}

function startAmbient() {
  stopAmbient();
  if (!musicEnabled) return;
  const notes = [110, 146.83, 164.81, 220, 164.81, 146.83];
  let step = 0;
  tone(notes[step], 1.8, "ambient", 0.014);
  ambientTimer = setInterval(() => {
    step = (step + 1) % notes.length;
    tone(notes[step], 1.8, "ambient", 0.014);
  }, 1700);
}

function stopAmbient() {
  clearInterval(ambientTimer);
  ambientTimer = null;
}

function startCountdown() {
  mission = selectMission();
  if (mission.length === 0) {
    showScreen("journey-screen");
    return;
  }
  showScreen("countdown-screen");
  roomStatus.textContent = "Synchronizing";
  let value = 3;
  const countdownValue = document.querySelector("#countdown-value");
  const countdownCopy = document.querySelector("#countdown-copy");
  const syncSteps = [...document.querySelectorAll(".sync-steps span")];
  countdownValue.textContent = value;
  tone(300, 0.14, "triangle", 0.05);

  const countdown = setInterval(() => {
    value -= 1;
    if (value > 0) {
      countdownValue.textContent = value;
      countdownCopy.textContent = value === 2 ? "Connecting your question journey..." : "Opening unseen dimensions...";
      syncSteps[3 - value].classList.add("active");
      tone(300 + (3 - value) * 100, 0.14, "triangle", 0.05);
      countdownValue.animate([{ transform: "scale(.7)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }], { duration: 360 });
      return;
    }
    clearInterval(countdown);
    countdownValue.textContent = "GO";
    syncSteps.forEach(step => step.classList.add("active"));
    tone(680, 0.4, "triangle", 0.06);
    setTimeout(beginMission, 620);
  }, 850);
}

function beginMission() {
  questionIndex = 0;
  correctAnswers = 0;
  currentStreak = 0;
  bestStreak = 0;
  selectedAnswers = [];
  dimensionNodes.innerHTML = mission.map((_, index) => `<span title="Dimension ${index + 1}"></span>`).join("");
  showScreen("quiz-screen");
  roomStatus.textContent = "Mission live";
  renderQuestion();
}

function renderQuestion() {
  clearInterval(timerId);
  const item = mission[questionIndex];
  revealPanel.hidden = true;
  document.querySelector("#question-stage").className = `question-stage type-${item.type}`;
  questionNumber.textContent = `Question ${questionIndex + 1} of ${mission.length}`;
  questionText.textContent = item.question;
  categoryPill.textContent = item.domain;
  interactionLabel.textContent = TYPE_LABELS[item.type];
  questionInstruction.textContent = item.type === "binary"
    ? "Resolve the claim."
    : item.type === "sequence"
      ? "Select the correctly ordered process."
      : "Choose the strongest answer.";
  missionProgress.style.width = `${((questionIndex + 1) / mission.length) * 100}%`;
  runningReward.textContent = `${correctAnswers * REWARD_PER_CORRECT} $PoC`;
  streakValue.textContent = currentStreak;

  const letters = item.type === "binary" ? ["T", "F"] : ["A", "B", "C", "D"];
  answerGrid.innerHTML = item.options.map((option, index) => `
    <button class="answer-button" data-index="${index}" type="button">
      <span class="letter">${letters[index]}</span>
      <span class="answer-copy">${option}</span>
    </button>
  `).join("");
  answerGrid.querySelectorAll(".answer-button").forEach(button => {
    button.addEventListener("click", () => selectAnswer(Number(button.dataset.index)));
  });
  startTimer();
}

function startTimer() {
  timeLeft = QUESTION_SECONDS;
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
  timerRing.style.strokeDashoffset = 113.1 * (1 - timeLeft / QUESTION_SECONDS);
  timerRing.classList.toggle("urgent", timeLeft <= 5);
}

function selectAnswer(choice) {
  clearInterval(timerId);
  const item = mission[questionIndex];
  const buttons = [...answerGrid.querySelectorAll(".answer-button")];
  if (buttons.every(button => button.disabled)) return;
  buttons.forEach(button => { button.disabled = true; });
  const isCorrect = choice === item.correct;
  selectedAnswers.push({ item, choice, isCorrect });

  if (choice >= 0) buttons[choice].classList.add(isCorrect ? "correct" : "wrong");
  buttons[item.correct].classList.add("correct");
  if (isCorrect) {
    correctAnswers += 1;
    currentStreak += 1;
    bestStreak = Math.max(bestStreak, currentStreak);
    playCorrect();
  } else {
    currentStreak = 0;
    playWrong();
  }
  runningReward.textContent = `${correctAnswers * REWARD_PER_CORRECT} $PoC`;
  streakValue.textContent = currentStreak;
  dimensionNodes.children[questionIndex].classList.add(isCorrect ? "unlocked" : "missed");

  revealPanel.hidden = false;
  revealPanel.classList.toggle("negative", !isCorrect);
  revealSymbol.textContent = isCorrect ? "✓" : "!";
  revealLabel.textContent = isCorrect ? "Dimension unlocked" : choice < 0 ? "Time expired" : "Signal corrected";
  revealAnswer.textContent = item.options[item.correct];
  revealExplanation.textContent = item.explanation;
  nextQuestionButton.innerHTML = questionIndex === mission.length - 1 ? "Reveal results <span>→</span>" : "Next dimension <span>→</span>";
  nextQuestionButton.focus();
}

function nextQuestion() {
  questionIndex += 1;
  if (questionIndex < mission.length) {
    renderQuestion();
    return;
  }
  finishMission();
}

function finishMission() {
  stopAmbient();
  const journey = loadJourney();
  mission.forEach(question => {
    if (!journey.seen.includes(question.id)) journey.seen.push(question.id);
  });
  journey.totalCorrect += correctAnswers;
  journey.missions.push({
    date: new Date().toISOString(),
    correct: correctAnswers,
    total: mission.length,
    reward: correctAnswers * REWARD_PER_CORRECT,
    bestStreak
  });
  saveJourney(journey);

  const accuracy = correctAnswers / mission.length;
  document.querySelector("#result-mark").textContent = accuracy >= 0.9 ? "S" : accuracy >= 0.7 ? "A" : accuracy >= 0.5 ? "B" : "C";
  document.querySelector("#final-reward").textContent = `${correctAnswers * REWARD_PER_CORRECT} $PoC`;
  document.querySelector("#final-score").textContent = `${correctAnswers} / ${mission.length}`;
  document.querySelector("#final-streak").textContent = bestStreak;
  document.querySelector("#final-journey").textContent = `${journey.seen.length} / ${QUESTION_BANK.length}`;
  document.querySelector("#result-subtitle").textContent = accuracy >= 0.7
    ? "Your signals held steady. Ten dimensions have joined your journey."
    : "The Matrix revealed where your next learning edge begins.";
  renderLeaderboard(journey);
  renderReview();
  document.querySelector("#next-mission").hidden = journey.seen.length >= QUESTION_BANK.length;
  showScreen("result-screen");
  roomStatus.textContent = "Mission complete";
  playVictory();
}

function renderLeaderboard(journey) {
  const current = journey.missions.at(-1);
  const peers = [
    { name: "Nova", correct: 10, streak: 8 },
    { name: "Maya", correct: 9, streak: 6 },
    { name: "Leo", correct: 8, streak: 5 },
    { name: "Preview Pilot", correct: current.correct, streak: current.bestStreak, you: true },
    { name: "Kai", correct: 6, streak: 4 }
  ].sort((a, b) => b.correct - a.correct || b.streak - a.streak);
  document.querySelector("#leaderboard-panel").innerHTML = `
    <div class="leaderboard-heading"><span>Mission room</span><small>Preview room results</small></div>
    <div class="leaderboard-list">${peers.map((player, index) => `
      <div class="leaderboard-row ${player.you ? "you" : ""}">
        <span class="rank-number">${index + 1}</span>
        <span class="leader-avatar">${player.name.charAt(0)}</span>
        <strong>${player.name}${player.you ? " · You" : ""}</strong>
        <span>${player.correct} / 10</span>
        <b>${player.correct * REWARD_PER_CORRECT} $PoC</b>
      </div>
    `).join("")}</div>
    <p class="panel-note">Other names are simulated preview players. Production rankings use verified Discord identities only.</p>
  `;
}

function renderReview() {
  document.querySelector("#review-panel").innerHTML = selectedAnswers.map((answer, index) => {
    const selected = answer.choice >= 0 ? answer.item.options[answer.choice] : "No answer";
    return `
      <article class="review-row ${answer.isCorrect ? "correct" : ""}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div><strong>${answer.item.question}</strong><p>Your answer: ${selected}</p><small>${answer.item.explanation}</small></div>
      </article>
    `;
  }).join("");
}

function resetToLobby() {
  clearInterval(timerId);
  mission = [];
  showScreen("lobby-screen");
  roomStatus.textContent = "Mission lobby";
  updateLobby();
  startAmbient();
}

readyButton.addEventListener("click", () => {
  getAudioContext();
  tone(330, 0.16, "sine", 0.05);
  tone(494, 0.24, "sine", 0.05, 0.1);
  startCountdown();
});
nextQuestionButton.addEventListener("click", nextQuestion);
document.querySelector("#next-mission").addEventListener("click", resetToLobby);
document.querySelector("#journey-results").addEventListener("click", () => showScreen("result-screen"));
document.querySelector("#reset-preview").addEventListener("click", () => {
  try { localStorage.removeItem(STORAGE_KEY); } catch { delete MEMORY_FALLBACK.journey; }
  resetToLobby();
});

document.querySelectorAll(".tab-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach(tab => tab.classList.toggle("active", tab === button));
    document.querySelectorAll(".result-panel").forEach(panel => { panel.hidden = panel.id !== button.dataset.panel; });
  });
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

function setupNetworkPulse() {
  const count = document.querySelector("#network-count");
  let value = 148;
  setInterval(() => {
    value = Math.max(120, Math.min(210, value + Math.floor(Math.random() * 5) - 2));
    count.textContent = value;
  }, 4200);
}

function setupMatrixField() {
  const canvas = document.querySelector("#matrix-field");
  const context = canvas.getContext("2d");
  const nodes = [];
  let width = 0;
  let height = 0;
  let dpr = 1;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    nodes.length = 0;
    const count = Math.min(80, Math.max(34, Math.floor(width * height / 21000)));
    for (let index = 0; index < count; index += 1) {
      nodes.push({
        x: Math.random() * width, y: Math.random() * height,
        vx: reducedMotion ? 0 : (Math.random() - 0.5) * 0.16,
        vy: reducedMotion ? 0 : (Math.random() - 0.5) * 0.16,
        radius: 1 + Math.random() * 1.3
      });
    }
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    nodes.forEach((node, index) => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
      for (let target = index + 1; target < nodes.length; target += 1) {
        const other = nodes[target];
        const distance = Math.hypot(node.x - other.x, node.y - other.y);
        if (distance < 140) {
          context.strokeStyle = `rgba(50, 87, 61, ${0.13 * (1 - distance / 140)})`;
          context.beginPath();
          context.moveTo(node.x, node.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
      context.fillStyle = index % 6 === 0 ? "rgba(209,91,55,.55)" : "rgba(50,87,61,.42)";
      context.beginPath();
      context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      context.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

updateLobby();
updateLaunchClock();
setInterval(updateLaunchClock, 1000);
setupNetworkPulse();
setupMatrixField();
