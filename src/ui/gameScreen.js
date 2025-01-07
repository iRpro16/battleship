import gameController from "../controllers/gameController";
import renderBoard from "./renderBoard";
import helperFunctions from "../utils/helperFunctions";

const gameScreen = (function() {
    let marker = 'x';

    const handleEnemyBoardClick = (e) => {
        // convert input to coordinates
        let coordinates = helperFunctions.convertInput(e.target.id);

        // player's attack
        let hit = gameController.playerTurn(coordinates);

        // if player lands hit
        if (hit) {
            let classes = [e.target.classList, 'hit'];
            console.log("Hit! Player can play again");
            e.target.classList.add(...classes);
        } else {
            console.log("Miss! Switching to enemy's turn");
            e.target.style.color = 'blue';
            gameController.computerTurn();
        }

        e.target.innerText = marker;
        updatePlayerBoard();
    }

    // re-render board after each hit
    const updatePlayerBoard = () => {
        let player = gameController.players[0];

        renderBoard.render(player.board);
    }

    return {
        handleEnemyBoardClick
    }
})();


export default gameScreen;