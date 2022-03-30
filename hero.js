class Hero {}
const bgImg = document.querySelector(".bg-img");
const bgImgRec = bgImg.getBoundingClientRect();
const hero = document.querySelector(".hero");
const heroRec = hero.getBoundingClientRect();
let heroX = heroRec.x;
document.addEventListener("keydown", (e) => {
  console.log(bgImgRec.right);
  if (e.key === "ArrowLeft") {
    hero.style.backgroundPosition = "-70px";

    if (heroX > bgImgRec.left) {
      heroX -= 10;
      hero.style.left = `${heroX}px`;
    }
  } else if (e.key === "ArrowRight") {
    hero.style.backgroundPosition = "-105px";
    if (heroX < bgImgRec.right - 35 - 20) {
      heroX += 10;
      hero.style.left = `${heroX}px`;
    }
  }
});
