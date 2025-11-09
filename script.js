// Name input handling
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  if (nameInput.value.trim() !== "") {
    greeting.textContent = `Hello, ${nameInput.value}! 👋`;
  } else {
    greeting.textContent = "Hello, friend! 👋";
  }
});

// Mood box controls
const moodBox = document.getElementById("moodBox");
const growBtn = document.getElementById("growBtn");
const shrinkBtn = document.getElementById("shrinkBtn");

let currentSize = 150;

growBtn.addEventListener("click", function () {
  currentSize += 20;
  if (currentSize > 300) currentSize = 300;
  moodBox.style.width = currentSize + "px";
  moodBox.style.height = currentSize + "px";
});

shrinkBtn.addEventListener("click", function () {
  currentSize -= 20;
  if (currentSize < 50) currentSize = 50;
  moodBox.style.width = currentSize + "px";
  moodBox.style.height = currentSize + "px";
});

// Dark mode toggle
const toggleModeBtn = document.getElementById("toggleModeBtn");
const container = document.querySelector(".container");

toggleModeBtn.addEventListener("click", function () {
  container.classList.toggle("dark-mode");

  if (container.classList.contains("dark-mode")) {
    toggleModeBtn.textContent = "☀️ Toggle Day/Night Mode";
  } else {
    toggleModeBtn.textContent = "🌙 Toggle Day/Night Mode";
  }
});

// Secret message toggle
const secretBtn = document.getElementById("secretBtn");
const secret = document.getElementById("secret");

secretBtn.addEventListener("click", function () {
  if (secret.style.display === "none" || secret.style.display === "") {
    secret.style.display = "block";
    secretBtn.textContent = "🔓 Hide Secret";
  } else {
    secret.style.display = "none";
    secretBtn.textContent = "🔒 Show Secret";
  }
});
