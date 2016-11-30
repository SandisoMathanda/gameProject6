var x = 0;
var y =  50;

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 37) {
    x -= 15
    document.getElementById("bird").setAttribute("x",x)
    //left
  }
   else if (e.keyCode == 39) {
     x = x + 15
    document.getElementById("bird").setAttribute("x", x)
    //up
  }
  else if (e.keyCode == 38) {
    y -= 10
   document.getElementById("bird").setAttribute("y", y)
   //right
 }
 else if (e.keyCode == 40) {
   y = y + 10
  document.getElementById("bird").setAttribute("y", y)
  //down
}
//overlap code
var birdx = Number(document.getElementById("bird").getAttribute("x"));
var birdWidth = Number(document.getElementById("bird").getAttribute("width"));

var birdy = Number(document.getElementById("bird").getAttribute("y"));
var birdHeight = Number(document.getElementById("bird").getAttribute("height"));

var worm1 = Number(document.getElementById("worm1"));

var worm1x = Number(document.getElementById("worm1").getAttribute("x"));
var worm1Width = Number(document.getElementById("worm1").getAttribute("width"));

var worm1y = Number(document.getElementById("worm1").getAttribute("y"));
var worm1Height = Number(document.getElementById("worm1").getAttribute("height"));

var worm2 = Number(document.getElementById("worm2"));

var worm2x = Number(document.getElementById("worm2").getAttribute("x"));
var worm2Width = Number(document.getElementById("worm2").getAttribute("width"));

var worm2y = Number(document.getElementById("worm2").getAttribute("y"));
var worm2Height = Number(document.getElementById("worm2").getAttribute("height"));



if (birdx < worm1x + worm1Width && birdx > worm1x && birdy < worm1y + worm1Height && birdy > worm1y)

{
console.log("overlap")
}
else if (birdx < worm2x + worm2Width && birdx > worm2x && birdy < worm2y + worm2Height && birdy > worm2y )
{
  console.log("overlap")
}
})
//windows set timeout
//get animation frame
//document.getElementById("worm").setAttribute("x", x)
//.getElementById("worm").setAttribute("y", y)
