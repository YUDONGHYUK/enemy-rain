class Hero {}

const hero = document.querySelector(".hero");
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    hero.style.backgroundPosition = "-70px";
  } else if (e.key === "ArrowRight") {
    hero.style.backgroundPosition = "-105px 0";
  }
});
