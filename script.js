let root = document.querySelector(':root');
function calculateFontSize(width, height) {
    if (width/height <= 1920/1080) {
        return '2vh';
    } else {
        return '1vw';
    }
}
function setTime() {
    let currentTime = new Date().toLocaleTimeString();
    document.getElementById('time').textContent = currentTime;
}
function setDate() {
    let currentDate = new Date().toLocaleDateString();
    document.getElementById('date').textContent = currentDate;
}
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function close() {
    document.getElementById("window").style.display = "none";
}
function close1() {
    document.getElementById("window1").style.display = "none";
}
function open() {
    document.getElementById("window1").style.display = "block";
}
function openWelcome() {
    document.getElementById("window").style.display = "block";
}
function secret() {
    window.location.href = "./secret.html?cipherInput=";
}

document.getElementById("windowX").addEventListener("click", close);
document.getElementById("window1X").addEventListener("click", close1);
document.getElementById("houseIcon").addEventListener("click", openWelcome);
document.getElementById("calendarIcon").addEventListener("click", open);
window.addEventListener("dblclick", secret);
setInterval(setTime, 1000);
setInterval(setDate, 1000);
let fontSize = calculateFontSize(window.innerWidth, window.innerHeight);
dragElement(document.getElementById("window"));
dragElement(document.getElementById("window1"));

root.style.setProperty('--font-size', fontSize);