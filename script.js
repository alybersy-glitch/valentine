const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const love = document.getElementById("love");
const video = document.getElementById("video");

// Your YouTube ID
const youtubeID = "vM-yUoD-Rf8";

// Make "No" button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// When "Yes" is clicked → show photo + autoplay YouTube
yesBtn.addEventListener("click", () => {
  love.classList.remove("hidden");
  // autoplay works because user clicked
  video.src = `https://www.youtube.com/embed/${youtubeID}?autoplay=1&rel=0`;
});
