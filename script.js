const text = document.getElementById("text");
const nextBtn = document.getElementById("next");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");

let step = 0;

const story = [
  "Hey birdie 🐦",
  "I know that we've been talking only for a short time…",
  "But quite the important date is coming up 💕",
  "I know what you're thinking…",
  "It's quite ballsy to ask you out on a date on that specific day",
  "But hey, our whole time talking is the definition of being ballsy, honest, and veeery cute 💖",
  "And it can't get much ballsier and cuter than having our first date on Valentine's… 🌹",
  "So, without further ado…"
];

const buttonTexts = [
  "Hello Kev 👋",
  "Go on... 💭",
  "What are you talking about",
  "Are... are you talking about the 14th?",
  "Hmmmm",
  "You're going to give me the ick Kev 🥲",
  "Keep going... ",
  "What's next?"
];

text.innerText = story[step];
nextBtn.innerText = buttonTexts[step];

nextBtn.addEventListener("click", () => {
  step++;

  if (step < story.length) {
    text.innerText = story[step];
    nextBtn.innerText = buttonTexts[step];
  } else {
    text.innerText = "Will you be my Valentine? 💘";
    nextBtn.classList.add("hidden");
    yesBtn.classList.remove("hidden");
    noBtn.classList.remove("hidden");
    
    yesBtn.style.position = "relative";
    noBtn.style.position = "relative";
  }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="container final-message">
      <h1>YAY!!! 💖</h1>
      <p>You just made me the happiest person ❤️</p>
    </div>
  `;
});

let noClickCount = 0;

noBtn.addEventListener("click", () => {
  noClickCount++;
  
  if (noClickCount === 1) {
    response.innerText = "Are you sure? 🥺";
    growYesButton();
  } else if (noClickCount === 2) {
    response.innerText = "Please reconsider 💕";
    growYesButton();
  } else if (noClickCount === 3) {
    response.innerText = "Come on birdie";
    growYesButton();
  } else if (noClickCount === 4) {
    response.innerText = "Okay I'm warning you, press no one more time and you won't be able to catch me";
    growYesButton();
  } else {
    response.innerText = "Wooosh! You can't catch me!";
    growYesButton();
    moveNoButton();
  }
});

function growYesButton() {
  const newScale = 1 + (noClickCount * 0.15);
  yesBtn.style.transform = `scale(${newScale})`;
}

noBtn.addEventListener("mouseenter", () => {
  if (noClickCount >= 4) {
    moveNoButton();
  }
});

function moveNoButton() {
  const screenCenterX = window.innerWidth / 2;
  const screenCenterY = window.innerHeight / 2;
  
  const maxOffset = 100;
  
  const offsetX = (Math.random() * (maxOffset * 2)) - maxOffset;
  const offsetY = (Math.random() * (maxOffset * 2)) - maxOffset;
  
  const finalX = screenCenterX + offsetX;
  const finalY = screenCenterY + offsetY;
  
  noBtn.style.position = "fixed";
  noBtn.style.left = finalX + "px";
  noBtn.style.top = finalY + "px";
  noBtn.style.transform = "translate(-50%, -50%)";
  noBtn.style.margin = "0";
  noBtn.style.zIndex = "1000";
}
