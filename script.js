
var grid=new Array(3);
grid[0]=new Array(3);
grid[1]=new Array(3);
grid[2]=new Array(3);



let squares = document.querySelectorAll(".square")
function changeColor(e) {
	e.target.style.backgroundcolor = "red";
	squares.forEach(squares => addEventListener("click", changeColor)); 
}



for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
  }
}

// Checks If Grid Is Already Clicked
function clickCell(x,y) {
  if (grid[x][y]>0) {
    alert("Cheaters Never Win!");
  } 


// Clicking Of Boxes
  else {
    if (currentPlayer==1) {
      document.getElementById("cell_"+x+"_"+y).style.backgroundcolor="red";
      document.getElementById("cell_"+x+"_"+y).innerHTML="X";
      grid[x][y]=1;
      currentPlayer=2;
    } else {
       document.getElementById("cell_"+x+"_"+y).style.backgroundcolor="blue";
       document.getElementById("cell_"+x+"_"+y).innerHTML="O";
      grid[x][y]=2;
      currentPlayer=1;
    }
  }
}


let isWinner = false                                        
let box = document.querySelectorAll(".square");
let color = "red";
let totalClicks = 0;
let button = document.querySelector("button");
button.addEventListener("click", reset);

function resetGame() {
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", changeColor);
    box[i].innerHTML = ""
  }
  totalClicks = 0
  isWinner = false;
}
resetGame();

function changeColor(e) {
  console.dir(e);
  e.target.style.backgroundColor = color;
  totalClicks += 1;
  if (color == "red") {
    color = "blue";
    e.target.innerHTML = "X"
    e.target.removeEventListener("click", changeColor);
  } else {
    color = "red";
    e.target.innerHTML = "O"
    e.target.removeEventListener("click", changeColor);
  }
  setTimeout(() => {
    redWinner();
    blueWinner();
    tie();
  },50)
}

function reset() {
  if (totalClicks > 0) {
    for (let i = 0; i < box.length; i++) box[i].style.backgroundColor = "ghostwhite";
    resetGame();
  }
}

function redWinner() {
  if (
    box[0].style.backgroundColor == "red" &&
    box[1].style.backgroundColor == "red" &&
    box[2].style.backgroundColor == "red"
  ) {
    gameWon("Red");
  }
  if (
    box[3].style.backgroundColor == "red" &&
    box[4].style.backgroundColor == "red" &&
    box[5].style.backgroundColor == "red"
  ) {
    gameWon("Red");
  }
  if (
    box[6].style.backgroundColor == "red" &&
    box[7].style.backgroundColor == "red" &&
    box[8].style.backgroundColor == "red"
  ) {
    gameWon("Red");
  }
  if (
    box[0].style.backgroundColor == "red" &&
    box[4].style.backgroundColor == "red" &&
    box[8].style.backgroundColor == "red"
  ) {
    gameWon("Red");
  }
  if (
    box[2].style.backgroundColor == "red" &&
    box[4].style.backgroundColor == "red" &&
    box[6].style.backgroundColor == "red"
  ) {
    gameWon("Red");
  }
  if (
    box[0].style.backgroundColor == "red" &&
    box[3].style.backgroundColor == "red" &&
    box[6].style.backgroundColor == "red"
  ) {
    gameWon("Red");
  }
  if (
    box[1].style.backgroundColor == "red" &&
    box[4].style.backgroundColor == "red" &&
    box[7].style.backgroundColor == "red"
  ) {
    gameWon("Red");
  }
  if (
    box[2].style.backgroundColor == "red" &&
    box[5].style.backgroundColor == "red" &&
    box[8].style.backgroundColor == "red"
  ) {
    gameWon("Red");
  }
}

function blueWinner() {
  if (
    box[0].style.backgroundColor == "blue" &&
    box[1].style.backgroundColor == "blue" &&
    box[2].style.backgroundColor == "blue"
  ) {
    gameWon("Blue");
  }
  if (
    box[3].style.backgroundColor == "blue" &&
    box[4].style.backgroundColor == "blue" &&
    box[5].style.backgroundColor == "blue"
  ) {
    gameWon("Blue");
  }
  if (
    box[6].style.backgroundColor == "blue" &&
    box[7].style.backgroundColor == "blue" &&
    box[8].style.backgroundColor == "blue"
  ) {
    gameWon("Blue");
  }
  if (
    box[0].style.backgroundColor == "blue" &&
    box[4].style.backgroundColor == "blue" &&
    box[8].style.backgroundColor == "blue"
  ) {
    gameWon("Blue");
  }
  if (
    box[2].style.backgroundColor == "blue" &&
    box[4].style.backgroundColor == "blue" &&
    box[6].style.backgroundColor == "blue"
  ) {
    gameWon("Blue");
  }
  if (
    box[0].style.backgroundColor == "blue" &&
    box[3].style.backgroundColor == "blue" &&
    box[6].style.backgroundColor == "blue"
  ) {
    gameWon("Blue");
  }
  if (
    box[1].style.backgroundColor == "blue" &&
    box[4].style.backgroundColor == "blue" &&
    box[7].style.backgroundColor == "blue"
  ) {
    gameWon("Blue");
  }
  if (
    box[2].style.backgroundColor == "blue" &&
    box[5].style.backgroundColor == "blue" &&
    box[8].style.backgroundColor == "blue"
  ) {
    gameWon("Blue");
  }
}

function gameWon(winner) {
  isWinner = true
  alert(`${winner} Wins!`)
}

function tie() {
  if (totalClicks === 9 && !isWinner) {
    alert("Its a Tie!");
  }
}