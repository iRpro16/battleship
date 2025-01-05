import gameController from "./gameController";
import renderBoard from "../ui/renderBoard";

const randomizeEventListener = (function() {
    // init
    const init = () => {
        const content = document.querySelector(".content");
        content.addEventListener('click', handleRandomizeClick);
    }

    // handle click
    const handleRandomizeClick = (e) => {
        if (e.target.classList.contains('randomize-btn')) {
            // get player
            let player = gameController.players[0];
            player.initPlayerShips();

            // middle cont
            let middleCont = document.querySelector(".middle-cont-player");
            let oldPlayerBoard = document.querySelector(".board-player");
            middleCont.removeChild(oldPlayerBoard);

            // create new board
            let newBoard = renderBoard.createBoard(player, player.board);
            middleCont.append(newBoard);
        }
    }

    return {
        init
    }
})();

export default randomizeEventListener;