const texts = document.querySelector("h1");
const background = document.querySelector("body");


export const lyrics = [
{
  text:"Before",
  Interval:500,
  stop: function(){
    return;
  }
},
{
  text:"the",
  Interval:500,
  stop: function(){
    return;
  }
},
{
  text:"moments",
  Interval:800,
  stop: function(){
    return;
  }
},
{
  text:"gone",
  Interval:1000,
  stop: function(){
    return;
  }
},
{
  text: "",
  Interval:500,
  stop: function(){
    texts.innerHTML = "";
    changebackground();
  }
},

//second lyrics
{
  text:"number",
  Interval:700,
  stop: function(){
    return;
  }
},
{
  text:"one",
  Interval:1500,
  stop: function(){
    return;
  }
},
{
  text:"party",
  Interval:1000,
  stop: function(){
    return;
  }
},
{
  text:"anthem",
  Interval:2000,
  stop: function(){
    return;
  }
},
{
  text: "",
  Interval:100,
  stop: function(){
    texts.innerHTML = "";
    changebackground();
  }
},
// third lyrics
{
  text:"yeah",
  Interval:500,
  stop: function(){
    return;
  }
},
{
  text:"yeah",
  Interval:2500,
  stop: function(){
    return;
  }
},
{
  text: "",
  Interval:100,
  stop: function(){
    texts.innerHTML = "";
    changebackground();
  }
},
//fourth lyrics
{
  text:"the",
  Interval:200,
  stop: function(){
    return;
  }
},
{
  text:"look",
  Interval:500,
  stop: function(){
    return;
  }
},
{
  text:"of",
  Interval:250,
  stop: function(){
    return;
  }
},
{
  text:"love",
  Interval:1000,
  stop: function(){
    return;
  }
},
{
  text: "",
  Interval:100,
  stop: function(){
    texts.innerHTML = "";
    changebackground();
  }
},
//fifth lyrics
{
  text:"the",
  Interval:300,
  stop: function(){
    return;
  }
},
{
  text:"rush",
  Interval:500,
  stop: function(){
    return;
  }
},
{
  text:"of",
  Interval:300,
  stop: function(){
    return;
  }
},
{
  text:'"blood"',
  Interval:1000,
  stop: function(){
    return;
  }
},
{
  text: "",
  Interval:100,
  stop: function(){
    texts.innerHTML = "";
    changebackground();
  }
},
//sixth lyrixs
{
  text:"the",
  Interval:200,
  stop: function(){
    return;
  }
},
{
  text:"she's",
  Interval:400,
  stop: function(){
    return;
  }
},
{
  text:"with",
  Interval:300,
  stop: function(){
    return;
  }
},
{
  text:"me",
  Interval:500,
  stop: function(){
    return;
  }
},
{
  text: "",
  Interval:100,
  stop: function(){
    texts.innerHTML = "";
    changebackground();
  }
},
//sevent lyrics

{
  text:"is",
  Interval:300,
  stop: function(){
    return;
  }
},
{
  text:"the",
  Interval:300,
  stop: function(){
    return;
  }
},
{
  text:"gallic",
  Interval:800,
  stop: function(){
    return;
  }
},
{
  text:"shrug",
  Interval:1000,
  stop: function(){
    return;
  }
},
{
  text: "",
  Interval:1000,
  stop: function(){
    texts.innerHTML = "";
  }
},
]

let currentBackground = "white";

function changebackground(){
  if(currentBackground === "white"){
    currentBackground = "red";
    background.classList.add("white");
    background.classList.remove("black");
  } else{
    currentBackground = "white";
    background.classList.remove("white");
    background.classList.add("black");
  }
}


