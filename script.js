const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");

document.addEventListener("keydown", setjumpDino);
document.addEventListener("click", setjumpDino);

function setjumpDino() {
  if (dino.classList !== "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}

const isAlive = setInterval(function () {
  let dinoTop = parseInt(getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft > 0 && cactusLeft < 50 && dinoTop >= 145) {
    // alert("Game Over");
  }
}, 30);
