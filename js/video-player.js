const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('video');
const playButton = videoPlayer.querySelector('.play-button');
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.innerHTML = 'Pause';
    } else {
        video.pause();
        playButton.innerHTML = 'Play';
    }
}
playButton.addEventListener('click', togglePlay);