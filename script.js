const text = document.getElementById("text");
const nextBtn = document.getElementById("next");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");

let step = 0;

const story = [
  "I know we haven’t been dating for a while…",
  "But I think everything that happened led us right here ❤️",
  "So I have one important question for you…"
];

text.innerText = story[step];

nextBtn.addEventListener("click", () => {
  step++;

  if (step < story.length) {
    text.innerText = story[step];
  } else {
    // Show the question
    text.innerText = "Will you be my Valentine? 💘";
    nextBtn.classList.add("hidden");
    yesBtn.classList.remove("hidden");
    noBtn.classList.remove("hidden");
  }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1>YAY!!! 💖🥰</h1>
    <p>You just made me the happiest person ❤️</p>
  `;
});

noBtn.addEventListener("click", () => {
  const messages = [
    "Are you sure? 🥺",
    "Please reconsider 💕",
    "I’ll wait… 😔",
    "Okay but what if you click yes? 😌"
  ];

  response.innerText =
    messages[Math.floor(Math.random() * messages.length)];
});
