var rand=Math.floor(Math.random()*6)+1;
document.querySelector(".dice .img1").setAttribute("src","images/dice"+ rand+".png");

var rand2=Math.floor(Math.random()*6)+1;
document.querySelector(".dice .img2").setAttribute("src","images/dice"+ rand2+".png");

if(rand>rand2)
{
    document.querySelector("h1").innerHTML="<em> Player 1 Wins! :) </em>";
}
else if(rand2>rand)
{
    document.querySelector("h1").innerHTML="<em> Player 2 Wins! :) </em>";
}
else{
    document.querySelector("h1").innerHTML="Draw ://"; 
}
