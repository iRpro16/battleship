import gameController from "../controllers/gameController";
import renderBoard from "./renderBoard";
import helperFunctions from "../utils/helperFunctions";
import createWinnerPrompt from "./declareWinner";

const gameScreen = (function() {
    const handleEnemyBoardClick = (e) => {
        // convert input to coordinates
        let coordinates = helperFunctions.convertInput(e.target.id);

        // player's attack
        let hit = gameController.playerTurn(coordinates);

        // if player lands hit
        if (hit) {
            let classes = [e.target.classList, 'hit']; // set classes
            e.target.classList.add(...classes);
            e.target.style.backgroundColor = 'lightgrey';
        } else {
            e.target.style.color = 'blue';
            gameController.computerTurn();
        }
        
        // set marker UI
        e.target.innerText = 'x';
        
        // update and check winner
        setTimeout(updatePlayerBoard, 1000);
        checkWinner();
    }

    const updatePlayerBoard = () => {
        let player = gameController.players[0];
        renderBoard.render(player.board);
    }

    const checkWinner = () => {
        // gameboard
        let playerGameBoard = gameController.players[0].gameboard;
        let enemyGameBoard = gameController.players[1].gameboard;
        let items = document.querySelectorAll('.board-enemy > div ');
        const content = document.querySelector('.content');

        // get winner
        let winner = playerGameBoard.shipsSunk() ? gameController.players[1] : gameController.players[0];

        // declare winner
        if (playerGameBoard.shipsSunk() || enemyGameBoard.shipsSunk()) {
            // remove event listener if there is a win
            items.forEach((item) => item.removeEventListener('click', handleEnemyBoardClick));
            content.append(createWinnerPrompt(winner.name));
        }
    }

    return {
        handleEnemyBoardClick,
    }
})();


export default gameScreen;