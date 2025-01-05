import Player from "../components/player";
import renderBoard from "../ui/renderBoard";

const gameController = (function() {
    const players = [];

    // initialize the game
    const init = () => {
        const player = Player('player');
        const enemy = Player('enemy');

        players[0] = player;
        players[1] = enemy;

        // initialize ships
        initShips();
    }

    const initShips = () => {
        players[0].initPlayerShips();
        players[1].initPlayerShips();
    }

    const renderBoards = () => {
        // render their boards
        renderBoard.appendBoard(players[0]);
        renderBoard.appendBoard(players[1]);
    }

    return {
        players,
        init,
        renderBoards
    }
})();

export default gameController;