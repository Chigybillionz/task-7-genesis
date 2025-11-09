const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

const moodBox = document.getElementById("moodBox");
const growBtn = document.getElementById("growBtn");
const shrinkBtn = document.getElementById("shrinkBtn");

const toggleModeBtn = document.getElementById("toggleModeBtn");

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secret");

// 1. Name Greeting
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() !== "") {
    greeting.innerText = "Hello, " + nameInput.value + "!";
    greeting.style.color = "green";
    greeting.style.fontWeight = "bold";
  } else {
    greeting.innerText = "Hello, friend!";
    greeting.style.color = "black";
    greeting.style.fontWeight = "normal";
  }
});

// 2. Mood Box Grow / Shrink
growBtn.addEventListener("click", () => {
  moodBox.style.width = moodBox.offsetWidth + 20 + "px";
  moodBox.style.height = moodBox.offsetHeight + 20 + "px";
});

shrinkBtn.addEventListener("click", () => {
  moodBox.style.width = moodBox.offsetWidth - 20 + "px";
  moodBox.style.height = moodBox.offsetHeight - 20 + "px";
});

// 3. Day/Night Mode
toggleModeBtn.addEventListener("click", () => {
  if (document.body.style.background === "black") {
    document.body.style.background = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.background = "black";
    document.body.style.color = "white";
  }
});

// 4. Secret Message Toggle
secretBtn.addEventListener("click", () => {
  if (secretMessage.style.display === "none") {
    secretMessage.style.display = "block";
  } else {
    secretMessage.style.display = "none";
  }
});
