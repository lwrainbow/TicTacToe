# Tic Tac Toe
<p>Using JavaScript to build a fully functional Tic Tac Toe game. Both html and css file are given by professer.</p>
<p><a href="http://lianxiao.dev.fast.sheridanc.on.ca/xiaoyu/TicTacToe/index.html">Play it</a></p>
My work as follow:
<ul>
    <li>The ‘Reset’ button calls an incomplete reset() function – finish this to restart the game.</li>
    <pre>
    function reset() {
        board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
        player = 'X';    
        empty = 9;    
        gameOver = false;   
        drawBoard(-1, -1);    
    }
    </pre>
    <li>Complete diagonal and vertical win conditions and highlight the win on screen.</li>
    <pre>
    // Check for vertical wins
    for (var col = 0; col < 3; col++) {
        if (board[0][col] != " " && board[0][col] == board[1][col] && board[0][col] == board[2][col]) {
        highlightWinCol(col);
        endGame();
        return;
        }
    }
    // Check for diagonal wins
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
    </pre>
    <li>A lose condition.  If nobody wins, the players should be told that nobody won.</li>
    <pre>
    // terminate the game if nobody wins.
    if (empty == 0)
        window.alert("The game ended in a draw. Please restart it!");
    </pre>
</ul>
