function showHint() {
  var logo = document.getElementById("logo")
  var hint = document.getElementById("hint")

  logo.onmouseover = mouseOver
  logo.onmouseout = mouseOut

  function mouseOver() {
    hint.style.visibility = "visible"
  }

  function mouseOut() {
    hint.style.visibility = "hidden"
  }
}


var girlLines = 0
var diff = document.getElementById("diff").innerHTML

function calcLinesNum() {
  girlLines = document.getElementsByClassName("girl").length

  if (diff == "medium") { girlLines *= 2 }
  if (diff == "hard") { girlLines *= 3 }
}

function showGirl() {
  var line = document.getElementById('girl-' + girlLines)
  if (line) { line.style.visibility = "visible" }
  
  girlLines--

  if (girlLines == 2 && diff == "hard"
    || girlLines == 1 && diff == "medium"
    || girlLines == 0) { endGame() }
}

function endGame() {
  var button = document.getElementById("play")
  button.className = "button-inactive"

  var gameOver = document.getElementById("game-over")
  gameOver.style.display = "block"
}


function closeAlert() {
  var gameOver = document.getElementById("game-over")
  gameOver.style.display = "none"
}


window.onload = function() {
  calcLinesNum()
  showHint()
}