const birdPlayBtn = document.getElementById('bird-chirp-play');
const birdVol = document.getElementById('bird-chirp-vol');
const birdAudio = document.getElementById('bird-chirp');
const pplPlayBtn = document.getElementById('people-chatting-play');
const ppVol = document.getElementById('people-chatting-vol');
const pplAudio = document.getElementById('people-chatting');
const libraryPlayBtn = document.getElementById('library-play');
const libraryVol = document.getElementById('library-vol');
const libraryAudio = document.getElementById('library');

let birdPlay = false;
let pplPlay = false;
let libraryPlay = false;

window.onload = () => {
    birdAudio.volume = birdVol.value;
    pplAudio.volume = ppVol.value;
    libraryPlay.volume = libraryVol.value;
}

birdPlayBtn.onclick = () => {
    if (!birdPlay) {
        birdAudio.play();
        birdPlay = true;
    } else {
        birdAudio.pause();
        birdPlay = false;
    }
}
birdVol.onchange = () => {
    birdAudio.volume = birdVol.value;
}

pplPlayBtn.onclick = () => {
    if (!pplPlay) {
        pplAudio.play();
        pplPlay = true;
    } else {
        pplAudio.pause();
        pplPlay = false;
    }
}
ppVol.onchange = () => {
    pplAudio.volume = ppVol.value;
}

libraryPlayBtn.onclick = () => {
    if (!libraryPlay) {
        libraryAudio.play();
        libraryPlay = true;
    } else {
        libraryAudio.pause();
        libraryPlay = false;
    }
}
libraryVol.onchange = () => {
    libraryAudio.volume = libraryVol.value;
}