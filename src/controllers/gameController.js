import Player from "../components/player";
import renderBoard from "../ui/renderBoard";
import helperFunctions from "../utils/helperFunctions";

const gameController = (function() {
    // players
    const players = [];

    // last moves
    const loggedHits = [];

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

    // player turn
    const playerTurn = (coordinates) => {
        let player = players[0];
        let enemy = players[1];

        return player.launchAttack(enemy.gameboard, coordinates);
    }

    // computer turn
    const computerTurn = () => {
        let player = players[0];
        let enemy = players[1];

        // get coordinates
        let coordinates = helperFunctions.generateCoordinates(10);

        // avoid duplicate coordinates
        while(loggedHits.includes(`[${coordinates}]`)) {
            coordinates = helperFunctions.generateCoordinates(10);
        }

        // push to loggedhits
        loggedHits.push(`[${coordinates}]`);

        // hit player
        let hit = enemy.launchAttack(player.gameboard, coordinates);

        // computer attack
        if (hit) {
            computerTurn();
            return true;
        } else {
            return false;
        }
    }

    return {
        players,
        init,
        renderBoards,
        playerTurn,
        computerTurn
    }
})();

export default gameController;