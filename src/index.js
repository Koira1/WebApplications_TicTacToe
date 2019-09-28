import { debuglog } from "util";

var size = 5;
var counter = 0;
var counter1 = 0;
var table = [];
var clicks = 0;
var EMPTY = "&nbsp";
var vuoro = {
  x: "X",
  y: "O"
};
var vuorovaihtuu = false;
var player = setPlayer(counter);

luoPoyta();

function ajastin() {
  var elem = document.getElementById("myBar");
  var width = 100;
  var id = setInterval(frame, 100);
  function frame() {
    if (width === 0) {
      counter++;
      player = setPlayer(counter);
      pelaaja(player);
      clearInterval(id);
      ajastin();
    } else {
      width--;
      elem.style.width = width + "%";
      elem.innerHTML = width / 10;
      if (vuorovaihtuu) {
        clearInterval(id);
        ajastin();
        vuorovaihtuu = false;
      }
    }
  }
}

function luoPoyta() {
  var poyta = document.getElementById("myTable");
  poyta.setAttribute("border", "1");
  poyta.setAttribute("width", "500");
  poyta.setAttribute("height", "500");
  var tpoyta = document.createElement("tbody");
  for (var i = 0; i < size; i++) {
    var rivi = document.createElement("tr");
    for (var j = 0; j < size; j++) {
      var lokero = document.createElement("td");
      lokero.className = "cell";
      table[counter1] = lokero;
      counter1++;
      rivi.appendChild(lokero);
    }
    tpoyta.appendChild(rivi);
  }
  poyta.appendChild(tpoyta);
  pelaaja(player);
  click(tpoyta);
  ajastin();
}

function click(tpoyta) {
  tpoyta.addEventListener("click", function(e) {
    if (e.target.innerHTML === "X" || e.target.innerHTML === "O") {
      return;
    }
    pelaaja(player);
    player = setPlayer(counter);
    counter++;
    e.target.innerHTML = player;
    if (player === vuoro.x) {
      e.target.className = "cell_x";
    } else {
      e.target.className = "cell_y";
    }
    clicks++;
    if (clicks === size * size) {
      Draw();
    }
    vuorovaihtuu = true;
    var winTrue = checkWin(player);
    if (winTrue) {
      win(player);
    }
  });
}

function pelaaja(player) {
  var pela = document.getElementById("pelaaja");
  pela.innerHTML = "Pelaaja " + player;
}

function setPlayer(counter) {
  if (counter % 2 === 0) {
    return vuoro.x;
  } else {
    return vuoro.y;
  }
}

function checkWin(player) {
  if (
    table[0].innerHTML === player &&
    table[1].innerHTML === player &&
    table[2].innerHTML === player &&
    table[3].innerHTML === player &&
    table[4].innerHTML === player
  ) {
    return true;
  }
  if (
    table[5].innerHTML === player &&
    table[6].innerHTML === player &&
    table[7].innerHTML === player &&
    table[8].innerHTML === player &&
    table[9].innerHTML === player
  ) {
    return true;
  }
  if (
    table[10].innerHTML === player &&
    table[11].innerHTML === player &&
    table[12].innerHTML === player &&
    table[13].innerHTML === player &&
    table[14].innerHTML === player
  ) {
    return true;
  }
  if (
    table[15].innerHTML === player &&
    table[16].innerHTML === player &&
    table[17].innerHTML === player &&
    table[18].innerHTML === player &&
    table[19].innerHTML === player
  ) {
    return true;
  }
  if (
    table[20].innerHTML === player &&
    table[21].innerHTML === player &&
    table[22].innerHTML === player &&
    table[23].innerHTML === player &&
    table[24].innerHTML === player
  ) {
    return true;
  }
  if (
    table[0].innerHTML === player &&
    table[5].innerHTML === player &&
    table[10].innerHTML === player &&
    table[15].innerHTML === player &&
    table[20].innerHTML === player
  ) {
    return true;
  }
  if (
    table[1].innerHTML === player &&
    table[6].innerHTML === player &&
    table[11].innerHTML === player &&
    table[16].innerHTML === player &&
    table[21].innerHTML === player
  ) {
    return true;
  }
  if (
    table[2].innerHTML === player &&
    table[7].innerHTML === player &&
    table[12].innerHTML === player &&
    table[17].innerHTML === player &&
    table[22].innerHTML === player
  ) {
    return true;
  }
  if (
    table[3].innerHTML === player &&
    table[8].innerHTML === player &&
    table[13].innerHTML === player &&
    table[18].innerHTML === player &&
    table[23].innerHTML === player
  ) {
    return true;
  }
  if (
    table[4].innerHTML === player &&
    table[9].innerHTML === player &&
    table[14].innerHTML === player &&
    table[19].innerHTML === player &&
    table[24].innerHTML === player
  ) {
    return true;
  }
  if (
    table[4].innerHTML === player &&
    table[8].innerHTML === player &&
    table[12].innerHTML === player &&
    table[16].innerHTML === player &&
    table[20].innerHTML === player
  ) {
    return true;
  }
  if (
    table[0].innerHTML === player &&
    table[6].innerHTML === player &&
    table[12].innerHTML === player &&
    table[18].innerHTML === player &&
    table[24].innerHTML === player
  ) {
    return true;
  }
}

function win(player) {
  var winner;
  if (player === "O") {
    winner = 2;
  }
  if (player === "X") {
    winner = 1;
  }
  alert("Player " + winner + " won!");
  newGame();
}

function newGame() {
  for (var i = 0; i < table.length; i++) {
    table[i].innerHTML = EMPTY;
    table[i].className = "cell";
  }
  counter = 0;
}

function Draw() {
  alert("Draw!");
  newGame();
}
