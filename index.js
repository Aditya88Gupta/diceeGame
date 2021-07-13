var randomVar = Math.floor((Math.random()*6))+1;
var randomVar2 = Math.floor((Math.random()*6))+1;

var img_1 = document.querySelector(".container .dice .img1");
var img_2 = document.querySelector(".container .dice .img2");

var text = ".\\images\\dice"+randomVar+".png";
console.log(text);
img_1.setAttribute("src",text);
text = ".\\images\\dice"+randomVar2+".png";
console.log(text);
img_2.setAttribute("src",text);

var heading = document.querySelector(".container h1");
if(randomVar>randomVar2){
  heading.innerHTML="🚩Player 1 Wins";
}
else if(randomVar<randomVar2){
  heading.innerHTML="Player 2 Wins🚩";
}
else{
  heading.innerHTML="Draw!!";
}
