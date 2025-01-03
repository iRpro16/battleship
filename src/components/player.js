import Gameboard from "./gameboard";

function Player(currentPlayer) {
    // each instance gets their own gameboard
    let gameboard = Gameboard();

    // launch attack
    const launchAttack = (enemyBoard, coordinates) => {
        enemyBoard.receiveAttack(coordinates, enemyBoard.ships);
    }

    // initialize player ships
    const initPlayerShips = () => {
        gameboard.initShips();
    }

    return {
        gameboard,
        currentPlayer: currentPlayer,
        board: gameboard.board,
        launchAttack,
        initPlayerShips
    }
}

export default Player;