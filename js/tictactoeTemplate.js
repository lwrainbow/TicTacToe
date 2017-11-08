/* 
 * JavaScript for a mobile tic tac toe app
 * Fill in the gaps!
 */

// the internal representation of the board
//           top row           middle row      bottom row
var board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

// next player to play -- X is the current player.
var player = 'X';

// empty slots remaining -- is your board empty yet?
// if not, the game goes on!
var empty = 9;

// game on or not
var gameOver = false;

// reset the game
// set all game variables to starting position
function reset() {
    board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    player = 'X';
    empty = 9;
    gameOver = false;
    drawBoard(-1, -1);
}

// called when the user clicks a cell, to place a piece
function place(row, col) {
    if (!gameOver && board[row][col] == " ") {
        board[row][col] = player;
        if (player == "X")
            player = "O";
        else
            player = "X";
        empty--;
        drawBoard(row, col);
        checkWin();
    }
}

// draws the current board
// this is completed already
function drawBoard(prow, pcol) {
    for (var row = 0; row < 3; row++)
        for (var col = 0; col < 3; col++) {
            var cell = document.getElementById("cell" + row + col);
            cell.innerHTML = board[row][col];
            cell.style["color"] = "black";
            if (row == prow && col == pcol)
                cell.style["backgroundColor"] = "lightBlue";
            else
                cell.style["backgroundColor"] = "";
        }
    document.getElementById("player").innerHTML = player;
    document.getElementById("message").style["visibility"] = "visible";
}

// checks for a win
// One victory condition is given to you
// Check for the other win and lose conditions yourself!
function checkWin() {
 
    // Checks for horizontal wins
    for (var row = 0; row < 3; row++) {
        if (board[row][0] != " " && board[row][0] == board[row][1] && board[row][0] == 
            board[row][2]) {
            highlightWinRow(row);
            endGame();
            return;
        }
    }
		
	// Check for vertical wins
	// You implement it! 	
    
    for (var col = 0; col < 3; col++) {
        if (board[0][col] != " " && board[0][col] == board[1][col] && board[0][col] == 
            board[2][col]) {
            highlightWinCol(col);
            endGame();
            return;
        }
    }
	// Check for diagonal wins:
	// You implement it!
    
    if (board[0][0] != " " && board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
        highlightWinDiag(1);
        endGame();
        return;
    }
    
    if (board[0][2] != " " && board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
        highlightWinDiag(-1);
        endGame();
        return;
    }    
    
	// What is the lose condition?
	// terminate the game if nobody wins.
    if (empty == 0)
        window.alert("The game ended in a draw. Please restart it!");
    

	
}

// ends the game
function endGame() {
    gameOver = true;
    document.getElementById("message").style["visibility"] = "hidden";
}

// highlight a winning row
// pass the row that will be highlighted.
function highlightWinRow(row) {
    for (var col = 0; col < 3; col++) {
        var cell = document.getElementById("cell" + row + col);
        cell.style["color"] = "red";
        cell.style["backgroundColor"] = "";
    }
}

// highlight a winning column
// pass the column that should be highlighted.
function highlightWinCol(col) {
    for (var row = 0; row < 3; row++) {
        var cell = document.getElementById("cell" + row + col);
        cell.style["color"] = "red";
        cell.style["backgroundColor"] = "";
    }
}

// highlight a winning diagonal
// pass a 1 or -1 to highlight either diagonal win.
function highlightWinDiag(diag) {
    var col = 0;
    if (diag == -1)
        col = 2;
    for (var row = 0; row < 3; row++, col += diag) {
        var cell = document.getElementById("cell" + row + col);
        cell.style["color"] = "red";
        cell.style["backgroundColor"] = "";
    }
}