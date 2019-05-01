// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build our functions
function togglePlay() {
    // const method = video.paused ? 'play' : 'pause';
    // video[method](); same as below
    if(video.paused) { //paused is a property that lives on the video
        video.play();
    } else {
        video.pause();
    }
}

// hook up the event listeners
video.addEventListener('click', togglePlay);