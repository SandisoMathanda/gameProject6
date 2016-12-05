// randomNumber returns a random number between min and max
function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}
var x = 0;
var y =  50;
var foodEaten = 0;
var timeStart = Date.now()
var gamePlaying = true;
document.getElementById("score").textContent = "Score: " + foodEaten


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



if (birdx + 100 < worm1x + worm1Width && birdx + 100 > worm1x && birdy + 50 < worm1y + worm1Height && birdy + 50 > worm1y)
{
console.log("overlap")
var randY = randomNumber(50,450)
document.getElementById("worm1").setAttribute("y", randY)
foodEaten += 1;
document.getElementById("score").textContent = "Score: " + foodEaten

}

else if (birdx + 100 < worm2x + worm2Width && birdx + 100 > worm2x && birdy + 50 < worm2y + worm2Height && birdy + 50 > worm2y )
{
  console.log("overlap")
  var randX = randomNumber(50,950)
  document.getElementById("worm2").setAttribute("x", randX)
  foodEaten += 1;
  document.getElementById("score").textContent = "Score: " + foodEaten
}

if (foodEaten == 5) {

  document.getElementById("game").pauseAnimations()
  var timeStop = Date.now()
  var duration = timeStop/1000 - timeStart/1000;
  var totalTime = Math.round(duration)
  document.getElementById("totalTime").setAttribute("opacity", 1)
  if (gamePlaying == true) {
  gamePlaying = false;
  console.log("Game over")
}
}
})


//windows set timeout
//get animation frame
//document.getElementById("worm").setAttribute("x", x)
//.getElementById("worm").setAttribute("y", y)
