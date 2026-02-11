const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const love = document.getElementById("love");
const video = document.getElementById("video");

// Your YouTube ID
const youtubeID = "vM-yUoD-Rf8";

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  love.classList.remove("hidden");
  video.src = `https://www.youtube.com/embed/${youtubeID}?autoplay=1`;
});

