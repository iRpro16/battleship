const renderBoard = (function () {
    // load board
    const createBoard = (player, boardObject) => {
        // create board
        const board = document.createElement("div");
        board.classList.add("board");
        board.classList.add(`${player.currentPlayer}`);
        board.style.gridTemplateColumns = `repeat(${boardObject.length}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${boardObject.length}, 1fr)`;

        // create items
        for (let i = 0; i < boardObject.length; i++) {
            for (let j = 0; j < boardObject[i].length; j++) {
                // create item
                let item = document.createElement('div');
                item.style.border = '1px solid blue';
                item.style.opacity = '0.5';
                
                // if item is a string
                if (typeof boardObject[i][j] === 'string' && player.currentPlayer === "player") {
                    item.classList.add(boardObject[i][j]);
                    item.style.border = "";
                }

                // make ships invisible
                if (typeof boardObject[i][j] === 'string' && player.currentPlayer === "enemy") {
                    item.classList.add(boardObject[i][j]);
                    item.style.backgroundColor = "white";
                }
                // append
                board.append(item);
            }
        }
        return board;
    }

    // append both board to the central div
    const appendBoards = (player) => {
        // get central div
        const centralDiv = document.querySelector('.central-div');

        // get board
        let playerGameBoard = createBoard(player, player.board);

        // append
        centralDiv.append(playerGameBoard);
    }

    const createSurrounding = () => {
        // surrounding container
        const surroundingContainer = document.createElement("div");
        surroundingContainer.classList.add('surrounding-cont');
        surroundingContainer.style.height = '600px';
        surroundingContainer.style.weight = '600px';
    }

    return {
        appendBoards
    }
})();

export default renderBoard;