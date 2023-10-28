console.log("Welcome to Spotify");

//Initialiize the variable 
let songIndex = 0;
let audioElement =new Audio('songs/4.mp3');
let masterPlay = document.getElementsBId('masterPlay');
let myProgressbar =document.getElementsBId('myProgressbar');
let gif =document.getElementsBId('gif');
let masterSongName =document.getElementsBId('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName : "KhudaHafiz" , filepath:"songs/4.mp3" , coverpath:"cover/1.jpg"},
    {songName : "Charlie_Puth_-_Attention_[Official_Video](256k)" , filepath:"songs/1.mp3"  , coverpath:"cover/2.jpg"},
    {songName : "Gajendra_Verma_-_Tune_Mere_Jaana_Kabhi_Nahi_Jaana_" , filepath:"songs/2.mp3" , coverpath:"cover/3.jpg"},
    {songName : "Haaye_Oye_-_QARAN_ft._Ash_King__" , filepath:"songs/3.mp3"  , coverpath:"cover/4.jpg"},
    {songName : "The_Local_Train_-_Aalas_Ka_Pedh_" , filepath:"songs/5.mp3"  , coverpath:"cover/4.jpg"},
]


songsItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpathpath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
})

// audioElement.play 

// Handle play/pause click .
masterPlay.addeventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 1;


    }
    else{
        audioElement.play();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        gif.style.opacity = 0.4;
    }
})

// Listen to Events 
audioElement.addeventListener('timeupdate',()=>{
  
    //update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressbar.value =progress;
})

myProgressbar.addeventListener('change',()=>{
audioElement.currentTime =myProgressbar.value * audioElement.duration/100;
})


const makeAllPlays =()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addeventListener('click',(e)=>{
       makeAllPlays();
       
        songIndex =parseInt(a.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${songIndex+1}.mp3'
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0 ;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-pause');
        masterPlay.classList.remove('fa-pause-play');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0 
    }
    else{
        songIndex+=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3'
         masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0 ;
        audioElement.play();
        masterPlay.classList.remove('fa-play-pause');
        masterPlay.classList.remove('fa-pause-play');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0 
    }
    else{
        songIndex-=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3'
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0 ;
        audioElement.play();
        masterPlay.classList.remove('fa-play-pause');
        masterPlay.classList.remove('fa-pause-play');
})