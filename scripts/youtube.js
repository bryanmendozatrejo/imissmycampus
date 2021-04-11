const video = document.querySelector('#video-iframe');
var videoList = [
    {id: '9HHftuLqFkc', school: 'UCR'},
    {id: '21fw7ZYcmU4', school: 'CSUF'}
];
const videoSrc = "https://www.youtube.com/embed/";

video.setAttribute('src', videoSrc + videoList[0].id + '?start=1');



for(let i = 0; i < videoList.length; i++)
{
    console.log("ID: " + videoList[i].id + ' School: ' + videoList[i].school);
}