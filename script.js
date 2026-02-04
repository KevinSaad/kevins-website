const text = document.getElementById("text");
const nextBtn = document.getElementById("next");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");

let step = 0;

const story = [
  "Hey birdie 🐦",
  "I know that we've been talking only for a short time…",
  "But quite the date is coming up 💕",
  "I know what you're thinking…",
  "It's quite ballsy to ask you out on a date on that specific day 😏",
  "But hey, our whole time talking is the definition of being ballsy, cute, and honest 💖",
  "And it can't get much cuter than having our first date on Valentine's… 🌹",
  "So, without further ado…"
];

// Custom button text for each slide
const buttonTexts = [
  "Hello Kev 👋",
  "Go on... 💭",
  "Tell me more 💝",
  "I'm listening 👀",
  "Oh really? 😏",
  "I like where this is going 💕",
  "Keep going... 🌹",
  "What's next? 💖"
];

text.innerText = story[step];
nextBtn.innerText = buttonTexts[step];

nextBtn.addEventListener("click", () => {
  step++;

  if (step < story.length) {
    text.innerText = story[step];
    nextBtn.innerText = buttonTexts[step]; // Update button text
  } else {
    // Show the question
    text.innerText = "Will you be my Valentine? 💘";
    nextBtn.classList.add("hidden");
    yesBtn.classList.remove("hidden");
    noBtn.classList.remove("hidden");
    
    // Set initial position for buttons to be relative to container
    yesBtn.style.position = "relative";
    noBtn.style.position = "relative";
  }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="container final-message">
      <h1>YAY!!! 💖🥰</h1>
      <p>You just made me the happiest person ❤️</p>
    </div>
  `;
});

let noClickCount = 0;

noBtn.addEventListener("click", () => {
  noClickCount++;
  
  if (noClickCount === 1) {
    response.innerText = "Are you sure? 🥺";
  } else if (noClickCount === 2) {
    response.innerText = "Please reconsider 💕";
  } else if (noClickCount === 3) {
    response.innerText = "Okay I'm warning you, press no one more time and you won't be able to catch me";
  } else {
    // Make the no button run away!
    response.innerText = "You can't catch me!";
    moveNoButton();
  }
});

function moveNoButton() {
  // Make button position fixed so it can move anywhere on screen
  noBtn.style.position = "fixed";
  noBtn.style.zIndex = "1000";
  noBtn.style.margin = "0"; // Remove any margin
  
  // Get the actual center of the viewport
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  
  // Maximum distance from center (50px box)
  const maxOffset = 100;
  
  // Random offset from center (-50 to +50 for both X and Y)
  const offsetX = (Math.random() * (maxOffset * 2)) - maxOffset;
  const offsetY = (Math.random() * (maxOffset * 2)) - maxOffset;
  
  // Calculate final position (center + offset - half button width/height to center the button)
  const randomX = centerX + offsetX - (noBtn.offsetWidth / 2);
  const randomY = centerY + offsetY - (noBtn.offsetHeight / 2);
  
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
