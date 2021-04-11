var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'IlhbR0B0fQA',
        //autoplay=1&mute=1&controls=0&start=40&origin=https%3A%2F%2Fdriveandlisten.herokuapp.com&playsinline=1&rel=0&showinfo=0&enablejsapi=1&widgetid=1
        playerVars: {
            'autoplay': 1,
            'mute':1,
            'controls': 0,
            'start': 40,
            'playsinline': 1,
            'rel': 0,
            'showinfo': 0,
            'enablejsapi': 1,
            'widgetid': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

var onPlayerReady = (event) => {
    event.target.playVideo();
}

var done = false;
var onPlayerStateChange = (event) => {
    if (event.data == YT>onPlayerStateChange.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

var stopVideo = () => {
    player.stopVideo();
}