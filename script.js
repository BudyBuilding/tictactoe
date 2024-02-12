let currentPlayer = "X";
const player = document.querySelector(".player");
const message = document.querySelector(".message-box");
const boxes = document.querySelectorAll(".content-box");
const reset = document.querySelector(".reset-button");

const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

reset.addEventListener("click", resetgame);

boxes.forEach((box, index) => {
  box.addEventListener("click", function () {
    handleBoxClick(box, index);
  });
});

//functions
function handleBoxClick(box, index) {
  if (box.innerHTML === "") {
    box.innerHTML = currentPlayer;

    const row = Math.floor(index / 3);
    const col = index % 3;
    board[row][col] = currentPlayer;

    if (checkforwins()) {
      //here i have to block the clicking

      blockClicks();
    }

    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }

    message.innerHTML = "Player " + currentPlayer + " turn";
  }
}

function resetgame() {
  console.log("resetting");
  currentPlayer = "X";
  message.innerHTML = "Player " + currentPlayer + " turn";
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
  unblockClicks();
}

function blockClicks() {
  boxes.forEach((box) => {
    box.classList.add("disable-interaction");
  });
}

function unblockClicks() {
  boxes.forEach((box) => {
    box.classList.remove("disable-interaction");
  });
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[i][j] = "";
    }
  }
}

function checkforwins() {
  for (let i = 0; i < 3; i++) {
    console.log(board[i][0] + " " + board[i][1] + " " + board[i][2]);
    if (
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][0] !== ""
    ) {
      message.innerHTML = "Player " + currentPlayer + " won";
      console.log("won");
      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] === board[1][i] &&
      board[2][i] === board[1][i] &&
      board[1][i] != ""
    ) {
      message.innerHTML = "Player " + currentPlayer + " won";
      console.log("won");
      return true;
    }
  }

  if (
    board[0][0] === board[1][1] &&
    board[2][2] === board[1][1] &&
    board[1][1] != ""
  ) {
    message.innerHTML = "Player " + currentPlayer + " won";
    console.log("won");
    return true;
  }

  if (
    board[0][2] === board[1][1] &&
    board[2][0] === board[1][1] &&
    board[1][1] != ""
  ) {
    message.innerHTML = "Player " + currentPlayer + " won";
    console.log("won");
    return true;
  }
  return false;
}
