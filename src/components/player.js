import Gameboard from "./gameboard";

function Player(name) {
    // each instance gets their own gameboard
    let gameboard = Gameboard();

    // launch attack
    const launchAttack = (enemyBoard, coordinates) => {
        return enemyBoard.receiveAttack(coordinates, enemyBoard.ships);
    }

    // initialize player ships
    const initPlayerShips = () => {
        gameboard.initShips();
    }

    return {
        gameboard,
        name: name,
        board: gameboard.board,
        launchAttack,
        initPlayerShips
    }
}

export default Player;