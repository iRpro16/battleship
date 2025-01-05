import randomizeEventListener from "../controllers/randomize";

const renderBoard = (function () {
    // load board
    const createBoard = (player, boardObject) => {
        // create board
        const board = document.createElement("div");
        board.classList.add(`board-${player.currentPlayer}`);
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
    const appendBoard = (player) => {
        // get central div
        const centralDiv = document.querySelector('.central-div');

        // get board
        let playerGameBoard = createBoard(player, player.board);

        // get surrounding
        const surroundingCont = createSurrounding(playerGameBoard, player.currentPlayer);

        // append
        centralDiv.append(surroundingCont);
    }

    const createSurrounding = (board, playerName) => {
        // surrounding container
        const surroundingCont = document.createElement("div");
        surroundingCont.classList.add(`surround-cont-${playerName}`);
        surroundingCont.style.height = '600px';
        surroundingCont.style.weight = '600px';

        // create letters
        const lettersCont = document.createElement("div");
        lettersCont.classList.add('letters-cont');
        appendItems(lettersCont, 'letters', 11)
        surroundingCont.append(lettersCont);

        // middle container
        const middleCont = document.createElement("div");
        middleCont.classList.add(`middle-cont-${playerName}`);

        // numbers container
        const numbersCont = document.createElement("div");
        numbersCont.classList.add("numbers-cont");
        appendItems(numbersCont, 'numbers', 10);
        middleCont.append(numbersCont, board);

        // bottom cont
        const bottomCont = document.createElement("div");
        bottomCont.classList.add("bottom-cont");

        // player board
        const playerBoard = document.createElement('p');
        playerBoard.innerText = `${playerName} board`;

        // append player names
        if (playerName === 'player') {
            bottomCont.append(playerBoard, createRandomizeBtn());
            bottomCont.style.gap = '10px';
        } else {
            bottomCont.append(playerBoard)
        }

        surroundingCont.append(middleCont, bottomCont);
        return surroundingCont;
    }

    const appendItems = (container, type, length) => {
        // array of alphabet
        let arrayAlphaBet = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

        // if type
        for (let i = 0; i < length; i++) {
            // create items
            let item = document.createElement('div');

            // if number or letter
            if (type === 'letters') {
                // first element empty
                item.innerText = arrayAlphaBet[i];
                container.append(item);
            }

            if (type === 'numbers') {
                item.innerText = i + 1;
                container.append(item);
            }
        }
    }

    const createRandomizeBtn = () => {
        // randomize button
        const randomizeBtn = document.createElement('button');
        randomizeBtn.classList.add('randomize-btn');
        randomizeBtn.innerText = 'Randomize';
        randomizeEventListener.init()

        return randomizeBtn;
    }

    return {
        appendBoard,
        createBoard
    }
})();

export default renderBoard;