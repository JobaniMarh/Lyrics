const texts = document.querySelector("h1");
const background = document.querySelector("body");
const audio = document.querySelector("audio");
const button = document.querySelector("button");
const lyrix = document.querySelector(".container");

import {lyrics} from "./lyrics.js"

button.addEventListener("click",()=>{
  button.style.display = "none";
  audio.play();
  setTimeout( displayLyrics, 1300);
})



async function displayLyrics(){
  lyrix.style.display = "block";
  for(const {text,Interval,stop} of lyrics){
    texts.innerHTML += `${text} `;
    stop();
    await new Promise(resolve => setTimeout(resolve, Interval));
  }
  audio.pause();
  audio.currentTime = 0;
  button.style.display = "block";
  lyrix.style.display = "none";
}

