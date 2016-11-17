var x = 0;
var y =  50;

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 37) {
    x -= 15
    document.getElementById("bird").setAttribute("x",x)
  }
   else if (e.keyCode == 39) {
     x = x + 15
    document.getElementById("bird").setAttribute("x", x)
  }
  else if (e.keyCode == 38) {
    y -= 10
   document.getElementById("bird").setAttribute("y", y)
 }
 else if (e.keyCode == 40) {
   y = y + 10
  document.getElementById("bird").setAttribute("y", y)
}
})
//windows set timeout
//get animation frame
//document.getElementById("worm").setAttribute("x", x)
//.getElementById("worm").setAttribute("y", y)

var birdx = Number(document.getElementById("bird").getAttribute("x"));
var birdWidth = Number(document.getElementById("bird").getAttribute("width"));
//var birdx2 = birdx1 + birdWidth;

var birdy = Number(document.getElementById("bird").getAttribute("y"));
var birdHeight = Number(document.getElementById("bird").getAttribute("height"));
//var birdy2 = birdy1 + birdHeight;

var worm1x = Number(document.getElementById("worm1").getAttribute("x"));
var wormWidth = Number(document.getElementById("worm1").getAttribute("width"));

var worm1y = Number(document.getElementById("worm1").getAttribute("y"));
var worm1Height = Number(document.getElementById("worm1").getAttribute("height"));

var worm2x = Number(document.getElementById("worm2").getAttribute("x"));
var worm2Width = Number(document.getElementById("worm2").getAttribute("width"));

var worm2y = Number(document.getElementById("worm2").getAttribute("y"));
var worm2Height = Number(document.getElementById("worm2").getAttribute("height"));
