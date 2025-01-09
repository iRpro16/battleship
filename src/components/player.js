import Gameboard from "./gameboard";

function Player(name) {
    let gameboard = Gameboard(); // each instance gets their own gameboard

    const launchAttack = (enemyBoard, coordinates) => {
        return enemyBoard.receiveAttack(coordinates, enemyBoard.ships);
    }

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