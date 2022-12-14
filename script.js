const play = document.getElementById('play');
const video = document.querySelector('video');
const fullScreen = document.getElementById('fullScreen');
const span = document.querySelector('span');
const currentDuration = document.getElementById('currentDuration');
const fullTime = document.getElementById('fullTime');
const playBackRate = document.getElementById('select');
const container = document.getElementById('videoContainer')

let isplaying = false;
function playing(){
isplaying = true;
 video.play();
 play.classList.remove('fa-play');
 play.classList.add('fa-pause');

}

function pause(){
    isplaying = false;
    video.pause();
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
}
function fullscreen(){
   video.requestFullscreen();
//    container.style.width = `${window.innerWidth}px`;
//    container.style.height = `${window.innerHeight}px`;
//    video.style.objectFit = 'cover';
//   console.log("helllo");
}

function videoDuration(e){
        if(isplaying){
            const {currentTime,duration} = e.srcElement;

           const finalDurationMinutes = Math.floor(duration/60);
           let fullDurationSeconds = Math.floor(duration % 60);
           if(fullDurationSeconds < 10){
            fullDurationSeconds = `0${fullDurationSeconds}`
           }
           if(fullDurationSeconds){
        
               fullTime.textContent = `${finalDurationMinutes}:${fullDurationSeconds}`;
           }
           const currentMinutes = Math.floor(currentTime/60);
          let currentSeconds = Math.floor(currentTime % 60);
          if(currentSeconds < 10){
           currentSeconds = `0${currentSeconds}`
          }
          currentDuration.textContent = `${currentMinutes}:${currentSeconds}`;
        }
        else{
            const {currentTime,duration} = e.srcElement;
            const finalDurationMinutes = Math.floor(duration/60);
            let fullDurationSeconds = Math.floor(duration % 60);
            if(fullDurationSeconds < 10){
             fullDurationSeconds = `0${fullDurationSeconds}`
            }
            if(fullDurationSeconds){
         
                span.textContent = `${finalDurationMinutes}:${fullDurationSeconds}`;
            }
            const currentMinutes = Math.floor(currentTime/60);
           let currentSeconds = Math.floor(currentTime % 60);
           if(currentSeconds < 10){
            currentSeconds = `0${currentSeconds}`
           }
           currentDuration.textContent = `${currentMinutes}:${currentSeconds}`;
        }
        if(currentDuration.textContent === fullTime.textContent){
            play.classList.remove('fa-pause');
            play.classList.add('fa-play');
        }
 }

 function playBack(){
    video.playbackRate = playBackRate.value;

 }

function changevolume(amount)
{
    video.volume = amount;
}
play.addEventListener('click',()=> isplaying? pause()  : playing());

fullScreen.addEventListener('click',fullscreen);
video.addEventListener('timeupdate',videoDuration);
playBackRate.addEventListener('change',playBack);
