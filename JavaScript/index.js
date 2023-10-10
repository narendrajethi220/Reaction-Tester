var start = new Date().getTime();
//getting random color for figures;
function getRndmColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; //This generates a random floating-point number between 0(inclusive) and 16(exclusive) .
  }
  return color;
}
// Function for randomly moving item with random shape
function rndmMoving() {
  var left = Math.random() * 900;
  var top = Math.random() * 280;
  var wh = Math.random() * 300 + 100;
  document.getElementById("fig").style.left = left;
  document.getElementById("fig").style.top = top;
  document.getElementById("fig").style.width = wh;
  document.getElementById("fig").style.height = wh;
  document.getElementById("fig").style.display = "block";
  document.getElementById("fig").style.backgroundColor = getRndmColor();
  start = new Date().getTime();
}

rndmMoving();

document.getElementById("fig").onclick = function () {
  document.getElementById("fig").style.display = "none";
  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;
  console.log(timeTaken);
  document.getElementById("second").innerHTML = timeTaken + " second ";

  rndmMoving();
};
