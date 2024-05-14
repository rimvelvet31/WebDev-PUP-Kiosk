function showSceneryBox(imgSource, heading, description) {
  let d = document.getElementById("display");
  let e = document.getElementById("body");

  e.style.overflow = "hidden";

  document.addEventListener("mousemove", alignSceneryBox);

  d.style.left = event.clientX + 5 + "px";
  d.style.top = event.clientY + 5 + "px";

  d.innerHTML =
    "<div id='wrapper' class='box'><img class='imgscene' src='" +
    imgSource +
    "'>" +
    "<h2>" +
    heading +
    "<h2>" +
    "<p>" +
    description +
    "</p></div>";
}

function alignSceneryBox() {
  let a = document.getElementById("display");
  let yOffset = 5; // Distance from the mouse pointer to the top of the card

  // If the mouse is near the bottom of the window, move the card up
  if (window.innerHeight - event.clientY < 350) {
    yOffset = -220; // Distance from the mouse pointer to the bottom of the card
  }

  a.style.left = event.clientX + 20 + "px";
  a.style.top = event.clientY + yOffset + "px";
}

function removeSceneryBox() {
  let a = document.getElementById("display");
  let b = document.getElementById("body");
  a.removeAttribute("style");
  b.removeAttribute("style");
  document.removeEventListener("mousemove", alignSceneryBox);
  a.removeChild(a.childNodes[0]);
}
