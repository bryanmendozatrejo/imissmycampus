let player;
const schoolSelect = document.getElementById('school-selector');
let school;

const urls = {
    'csuf': 'IlhbR0B0fQA',
    'csulb': 'k8-ZP0sE-ls',
    'ucr': '9HHftuLqFkc',
    'uci':'zT9_Mw4B6lU'
};

var onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: '9HHftuLqFkc',
        playerVars: {
            'autoplay': 1,
            'mute':1,
            'controls': 0,
            'disablekb': 1,
            'fs': 0,
            'loop': 1,
            'modestbranding': 1,
            'start': 50,
            'playsinline': 1,
            'rel': 0,
            'enablejsapi': 1,
            'vq': '4k2160'
        }
    });
} 

schoolSelect.addEventListener('change', (event) => {
    school = event.target.value;
    player.loadVideoById(urls[school], 50, 50);
});

