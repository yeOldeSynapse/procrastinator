function showAbout() {
  var box = document.getElementById("about-box")
  var link = document.getElementById("about-link")
  var boxStyle = getComputedStyle(box, "")

  if (boxStyle.visibility == "hidden") {
    box.style.visibility = "visible"
    link.style.borderBottom = "none"
    link.style.color = "#0597f2"
  } else {
    box.style.visibility = "hidden"
    link.style.borderBottom = "1px dotted white"
    link.style.color = "white"
  }
}