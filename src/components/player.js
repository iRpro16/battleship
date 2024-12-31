import Gameboard from "./gameboard";

function Player() {
    // each instance gets their own gameboard
    let gameboard = Gameboard();

    // launch attack
    const launchAttack = (enemyBoard, coordinates) => {
        enemyBoard.receiveAttack(coordinates, enemyBoard.ships);
    }

    return {
        gameboard,
        board: gameboard.board,
        launchAttack
    }
}

module.exports = Player;
export { Player };