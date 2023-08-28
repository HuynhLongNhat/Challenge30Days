var play = document.querySelector('.play')
var timer = document.querySelector('.timer')
var progressFill = document.querySelector('.progress-fill')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var volume = document.querySelector('.volume')
var volumeInput = document.querySelector('.volume input')
var volumeIcon = document.querySelector('.volume i')
var video = document.querySelector('video');
var voidCache = 0

function togglePlay() {
    if(video.paused) {
         video.play()
         play.innerHTML = '<i class="fa-solid fa-pause"></i>'
        }
        else {
            video.pause()
            play.innerHTML = ' <i class="fa-solid fa-play"></i>'
    }
}

function updateTime(){
    //video.currentTime : thoi gian hien tai cua video
    // video.duration : tong thoi gian cua video
    timer.innerHTML = timeToMMSS(video.currentTime) + ' / ' + timeToMMSS(video.duration)
    let percentProgress = Math.floor((video.currentTime / video.duration)*100)
    progressFill.style.width = `${percentProgress}%`
}

function timeToMMSS(time){
   let min = Math.floor(time/60)
   let sec = Math.floor(time%60)
   return `${min}:${sec}`
}

function skip(skipTime){
  video.currentTime += skipTime
}



play.addEventListener('click' , togglePlay)
video.addEventListener('click' , togglePlay)
video.addEventListener('timeupdate' ,updateTime)
prev.addEventListener('click' , function() {
     skip(-10)
} )
next.addEventListener('click' , function(){
      skip(10)
} )


function updateVolume(){
    if(video.volume ==0) {
        volumeIcon.classList.remove('fa-volume-high')
        volumeIcon.classList.add('fa-volume-xmark')
         
    }
     else {
        volumeIcon.classList.add('fa-volume-high')
        volumeIcon.classList.remove('fa-volume-xmark')
     }
}

volumeInput.addEventListener('change' , function(){
    voidCache = this.value
    video.volume = this.value
    updateVolume()
    
})

volumeIcon.addEventListener('click' , function(){
    if(video.volume ==0) {
        video.volume = voidCache
        volumeInput.value = voidCache
       
    }else {
        video.volume = 0
        volumeInput.value = 0
    }
    updateVolume()
})