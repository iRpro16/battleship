import Player from "../components/player";
import renderBoard from "../ui/renderBoard";
import helperFunctions from "../utils/helperFunctions";

const gameController = (function() {
    // players
    const players = [];

    // last moves
    const loggedMoves = [];

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

    const playerTurn = (coordinates) => {
        let player = players[0];
        let enemy = players[1];

        return player.launchAttack(enemy.gameboard, coordinates);
    }

    const computerTurn = () => {
        // coordinates
        let coordinates = randomCoordinates(loggedMoves);
    
        // log the move
        loggedMoves.push(`[${coordinates}]`);
    
        // hit player
        let hit = players[1].launchAttack(players[0].gameboard, coordinates);
    
        while (hit) {
            let lastMove = loggedMoves[loggedMoves.length - 1];
            coordinates = adjacentCoordinates(loggedMoves, lastMove);
    
            // Ensure there are valid adjacent coordinates
            if (!coordinates) break;
    
            // log the move before launching the attack
            loggedMoves.push(`[${coordinates}]`);
            hit = players[1].launchAttack(players[0].gameboard, coordinates);
        }
    };
    
    const randomCoordinates = (previousMoves) => {
        let coordinates;
        let attempts = 0;
        const maxAttempts = 100; // Arbitrary limit to prevent infinite loops
        do {
            coordinates = helperFunctions.generateCoordinates(10);
            attempts++;
            if (attempts > maxAttempts) return null; // No valid moves left
        } while (previousMoves.includes(`[${coordinates}]`));
        return coordinates;
    };
    
    const adjacentCoordinates = (previousMoves, lastMove) => {
        let coordinates;
        let attempts = 0;
        const maxAttempts = 10; // Limit attempts to prevent infinite loops
        do {
            coordinates = helperFunctions.getAdjacentCoordinates(lastMove);
            attempts++;
            if (attempts > maxAttempts) return null; // No valid adjacent moves
        } while (previousMoves.includes(`[${coordinates}]`));
        return coordinates;
    };

    return {
        players,
        init,
        renderBoards,
        playerTurn,
        computerTurn,
    }
})();

export default gameController;