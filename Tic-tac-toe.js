let b = document.getElementById("ticTacToe");
let board = [];
let data = "";
for (let i = 0; i < 3; i++) {
    board[i] = [".", ".", "."];
}
for (let i = 0; i < 3; i++) {
    data += "<br>";
    for (let j = 0; j < 3; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
data += "<br><br>" + "<input onClick='changeX()' type='button' value='Change X'>" + "<input onClick='changeO()' type='button' value='Change O'>";
b.innerHTML = data;

function changeX() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    board[positionX][positionY] = "X";
    for (let i = 0; i < 3; i++) {
        data += "<br>";
        for (let j = 0; j < 3; j++) {
            data += board[i][j] + "&nbsp;&nbsp;";
        }
    }
    data += "<br><br>" + "<input onClick='changeX()' type='button' value='Change X'>" + "<input onClick='changeO()' type='button' value='Change O'>";
    b.innerHTML = "<br><br>" + data;
}

function changeO() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    board[positionX][positionY] = "O";
    for (let k = 0; k < 3; k++) {
        data += "<br>";
        for (let l = 0; l < 3; l++) {
            data += board[k][l] + "&nbsp;&nbsp;";
        }
    }
    data += "<br><br>" + "<input onClick='changeX()' type='button' value='Change X'>" + "<input onClick='changeO()' type='button' value='Change O'>";
    b.innerHTML = "<br><br>" + data;
}