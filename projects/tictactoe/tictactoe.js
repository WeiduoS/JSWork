window.onload = function () {
    const human = "O";
    const ai = "X";
    const cells = document.querySelectorAll("div#tictactoe .cell");
    const replay = document.querySelectorAll(".overCanvas .button")[0];
    let checkBoard;
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    replay.addEventListener("click", init, false);

    init();

    function init() {
        for(let i = 0; i < cells.length; i++) {
            cells[i].innerText = "";
            cells[i].addEventListener("click", turnClick, false);
            if(cells[i].classList.contains("gameOver")) cells[i].classList.remove("gameOver");
        }
        document.getElementsByClassName("overCanvas")[0].classList.remove("overCanvasCollapse");
        document.querySelector(".overCanvas .text").innerText = "";
        checkBoard = Array.from(new Array(9), (item, index) => (index));
    }

    function turnClick() {
        if(typeof checkBoard[this.id] == 'number') {
            cellClick(this.id, human);
            if(!checkTie() && !checkWin(checkBoard, ai)) cellClick(bestSpot(), ai);
        }
    }

    function cellClick(squareId, player) {
        console.log("squareId" + squareId + ", player: " + player);
        checkBoard[squareId] = player;
        cells[squareId].innerText = player;
        cells[squareId].classList.add("addText");
        let gameWinner = checkWin(checkBoard, player);
        console.log("gameOver: " + gameWinner);
        if(gameWinner != null) gameOver(gameWinner);
    }

    function checkWin(board, player) {
        let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
        let res = null;
        for(let [index, winner] of winCombos.entries()) {
            if(winner.every( e => plays.indexOf(e) > -1)) {
                res = {index, player};
                break;
            }
        }
        return res;
    }

    function gameOver(gameWon) {
        console.log("gameOver");
        for(let i = 0; i < winCombos[gameWon.index].length; i++) {
            let elem = document.getElementById(winCombos[gameWon.index][i]);
            if(!elem.classList.contains("gameOver")) setTimeout(function() { elem.classList.add("gameOver")}, 200);
        }
        declareWinner(gameWon.player === human ? "You win!" : "You lose.");
    }

    function declareWinner(text) {
        console.log("declarer: " + text);
        document.getElementsByClassName("overCanvas")[0].classList.add("overCanvasCollapse");
        document.querySelector(".overCanvas .text").innerText = text;
    }

    function checkTie() {
        if(emptyCells().length === 0) {
            for(let i = 0; i < cells.length; i++) {
                cells[i].removeEventListener("click", turnClick, false);
            }
            declareWinner("Tie ! Try your best");
            return true;
        }
        return false;
    }

    function emptyCells() {
        return checkBoard.filter(s => typeof s == 'number');
    }

    function bestSpot() {
        return miniMax(checkBoard, ai).index;
        // return emptyCells()[0];
    }

    function miniMax(newboard, player) {
        let availableCells = emptyCells();

        if(checkWin(newboard, human)) {
            return {score : -10};
        } else if(checkWin(newboard, ai)) {
            return {score: 10};
        }else if(availableCells.length === 0){
            return {score: 0};
        }

        let moves = [];

        for(let i = 0; i < availableCells.length; i++) {
            let move = {};
            move.index = newboard[availableCells[i]];
            newboard[availableCells[i]] = player;

            if(player === ai) {
                let res = miniMax(newboard, human);
                move.score = res.score;
            }else {
                let res = miniMax(newboard, ai);
                move.score = res.score;
            }

            newboard[availableCells[i]] = move.index;
            moves.push(move);
        }
        let bestNext;

        if(player === ai) {
            let best = -100000;
            for(let i = 0; i < moves.length; i++) {
                if(moves[i].score > best) {
                    best = moves[i].score;
                    bestNext = i;
                }
            }
        }else {
            let best = 100000;
            for(let i = 0; i < moves.length; i++) {
                if(moves[i].score < best) {
                    best = moves[i].score;
                    bestNext = i;
                }
            }
        }

        return moves[bestNext];
    }
};