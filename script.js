const CORRECT_CODE = "031026";

const input = document.getElementById("code");
const dots = document.querySelectorAll(".dots div");
const unlock = document.getElementById("unlock");
const error = document.getElementById("error");

const loginScreen = document.getElementById("loginScreen");
const transition = document.getElementById("transition");
const mainContent = document.getElementById("mainContent");
const flowers = document.getElementById("flowers");
const music = document.getElementById("bgMusic");

input.focus();

document.body.addEventListener("click", () => input.focus());

input.addEventListener("input", () => {
  const value = input.value;

  dots.forEach((dot, i) => {
    dot.style.background = i < value.length ? "#ff4f87" : "#ffd1df";
  });

  if (value.length === 6) check();
});

unlock.onclick = check;

function createFlowerBurst() {
  for (let i = 0; i < 120; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerHTML = Math.random() > 0.5 ? "🌸" : "🌺";

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 3 + Math.random() * 2 + "s";
    flower.style.fontSize = 18 + Math.random() * 22 + "px";

    flowers.appendChild(flower);

    setTimeout(() => flower.remove(), 9000);
  }
}

function check() {
  if (input.value === CORRECT_CODE) {

    // start petals immediately
    createFlowerBurst();

    // show welcome screen quickly
    setTimeout(() => {
      transition.classList.add("show");
    }, 100);

    // hide welcome screen after 3.2s
    setTimeout(() => {
      transition.classList.remove("show");
    }, 3300);

    // show scrapbook after fade-out
    setTimeout(() => {
      flowers.innerHTML = "";
      mainContent.classList.add("show");
      loginScreen.style.display = "none";

      music.play().catch(() => {});
    }, 3900);

  } else {
    error.innerHTML = "Wrong code ❤️";
    input.value = "";

    dots.forEach(dot => {
      dot.style.background = "#ffd1df";
    });
  }
}

const letterText = `Happy Boyfriend's Day, my sweet boy ❤️ 

If you're reading this, it means you made it through the little surprise I built just for you. I don't think a website could ever fully explain how much you mean to me, but I wanted to create a small place that holds our memories, our songs, and all the love I carry for you. 

From the moment I met you in that surprisingly well-developed 5th grade classroom, I fell in love with your geekiness, going on and on about something niche enough for everyone else to zone out. I didn't. I may not admit it as readily, but I've somehow loved you since I met you. As a friend, at first...but eventually, by some graceful fate (and your persistent efforts), that dynamic changed.
You've truly and wholly enveloped my life with love and affection, and I hope that every ounce of kindness you've poured into the Universe comes flooding back onto you.

Every photo here is a moment I never want to forget. Every song is a feeling I want to keep reliving with you. Thank you for being my safe place, my favorite person, and the one who makes even ordinary days feel special. 

I love you endlessly. 💌`; 
const typed = document.getElementById('typedLetter'); if (typed) { let i = 0; function typeLetter() { if (i < letterText.length) { typed.textContent += letterText.charAt(i); i++; setTimeout(typeLetter, 32); } } typeLetter(); }
