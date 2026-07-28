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
  for (let i = 0; i < 85; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerHTML = Math.random() > 0.5 ? "🌸" : "🌺";

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 4 + Math.random() * 4 + "s";
    flower.style.fontSize = 18 + Math.random() * 22 + "px";

    flowers.appendChild(flower);

    setTimeout(() => flower.remove(), 9000);
  }
}

function check() {
  if (input.value === CORRECT_CODE) {

    loginScreen.classList.add("hide");
    createFlowerBurst();

    setTimeout(() => {
      transition.classList.add("show");
    }, 300);

    setTimeout(() => {
      transition.classList.remove("show");
      mainContent.classList.add("show");

      music.play().catch(() => {
        console.log("Autoplay blocked by browser");
      });
    }, 2300);

  } else {
    error.innerHTML = "Wrong code ❤️";
    input.value = "";

    dots.forEach(dot => {
      dot.style.background = "#ffd1df";
    });
  }
}
