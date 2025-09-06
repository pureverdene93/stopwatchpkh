const bodyy = document.getElementById("body");

bodyy.classList.add("boyy");

const tsag = document.createElement("div");
tsag.classList.add("tsag");
tsag.innerHTML = "00 : 00 : 00";

const border = document.createElement("div");
border.classList.add("bcl");

const bdiv = document.createElement("div");
bdiv.classList.add("bdcl");

const bstart = document.createElement("button");
bstart.classList.add("b1");
bstart.innerHTML = "Start";
bstart.onclick = start;

const bstop = document.createElement("button");
bstop.classList.add("b2");
bstop.innerHTML = "Stop";
bstop.onclick = stopi;

const breset = document.createElement("button");
breset.classList.add("b1");
breset.innerHTML = "Reset";

let time = 0;
function start() {
  setInterval(function () {
    tsag.innerHTML = time++;
  }, 1000);
}

let stop1 = null;
function stopi() {
  tsag.innerHTML = stop1;
}

// let sec = time % 60;
// let minute = Math.floor(time / 60);
// let hour = Math.floor(hour / 3600);

border.appendChild(tsag);

bdiv.appendChild(bstart);

bdiv.appendChild(bstop);

bdiv.appendChild(breset);

border.appendChild(bdiv);

document.body.appendChild(border);
