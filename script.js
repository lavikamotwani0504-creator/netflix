// INTRO → PROFILE
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    intro.style.transition = "opacity 2s";
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.classList.add("hidden");
      document.getElementById("profilePage").classList.remove("hidden");
    }, 2000);

  }, 3000);
});

// PROFILE → HOME
function goHome() {
  document.getElementById("profilePage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
}

// VIDEO PLAYER
function playVideo(videoPath) {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("player");
  const source = document.getElementById("videoSource");

  source.src = videoPath;
  video.load();

  modal.style.display = "flex";
  video.play();
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("player");

  video.pause();
  video.currentTime = 0;
  modal.style.display = "none";
}