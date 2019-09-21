var size = 5;
var counter = 0;
var counter1 = 0;
var table = [];
var EMPTY = "&nbsp";
var vuoro = {
  x: "X",
  y: "O"
};
var winConditions = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [4, 8, 12, 16, 20],
  [0, 6, 12, 18, 24]
];
luoPoyta();

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
      table[counter1] = lokero;
      counter1++;
      rivi.appendChild(lokero);
    }
    tpoyta.appendChild(rivi);
  }
  poyta.appendChild(tpoyta);
  click(tpoyta);
}

function click(tpoyta) {
  tpoyta.addEventListener("click", function(e) {
    if (e.target.innerHTML === "X" || e.target.innerHTML === "O") {
      return;
    }
    var player = setPlayer(counter);
    counter++;
    e.target.innerHTML = player;
    e.target.setAttribute("align", "center");
    if (counter === size * size) {
      Draw();
    }
    var winTrue = checkWin(player);
    if (winTrue) {
      win(player);
    }
  });
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
  }
  counter = 0;
}

function Draw() {
  alert("Draw!");
  newGame();
}
