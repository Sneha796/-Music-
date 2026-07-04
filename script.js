const audio=document.getElementById("audio");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const play=document.getElementById("play");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const progress=document.getElementById("progress");
const volume=document.getElementById("volume");

const songs={
  {name:"songTitle1", "artist1", src:"songs/song1.mp3"}

let songIndex=0;
let isPlaying=false;

function loadSong(index){
  title.textContent=songs[index].name;
  artist.src=songs[index].src;
}

function playSong(){
  audio.play();
  playBtn.innerHTML="⏸";
  isPlaying=true;
}

function pauseSong(){
  audio.pause()
  playBtn.innerHTML="⏹";
  isPlaying=false;
}

function nextSong(){
  songIndex=(songIndex+1)%songs.length;
  playSong();
}

function prevSong(){
  songIndex=(songIndex-1+songs.length)%songslength;
  loadSong(songIndex);
  playSong();
}

playBtn.addEventListner("click",()=>{
  isPlaying?pauseSong():playSong();
});
nextBtn.addEventListner("click", nextSong);
prevBtn.addEventListner("click", prevSong);

audio.addEventListner("timeUpdate",()=>{
  progress.value=("audio".currentTime/audio.duration)*100;
}) 

progress.addEventListner("input",()=>{
  audio.currentTime+=(progress.value/100)*audio.duration;}) 

volume.addEventListner("input",()=>{
  audio.volume=volume.value;
});
loadSong(songIndex);
