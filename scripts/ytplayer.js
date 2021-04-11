var player;
var onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'IlhbR0B0fQA',
        playerVars: {
            'autoplay': 1,
            'mute':1,
            'controls': 0,
            'disablekb': 1,
            'fs': 0,
            'modestbranding': 1,
            'start': 11,
            'playsinline': 1,
            'rel': 0,
            'enablejsapi': 1,
            'vq': '4k2160'
        }
    });
}