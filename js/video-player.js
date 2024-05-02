const playButton = document.getElementById('playButton');
const video = document.getElementById('myVideo');

playButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    this.classList.add('playing');
  } else {
    video.pause();
    this.classList.remove('playing');
  }
});

video.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playButton.classList.add('playing');
  } else {
    video.pause();
    playButton.classList.remove('playing');
  }
});
