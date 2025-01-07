import gameScreen from "./gameScreen";

function startButton(player) {
    // queries
    const startBtn = document.querySelector('.start-btn');
    const randomizeBtn = document.querySelector('.randomize-btn');

    // add event listeners
    startBtn.addEventListener('click', () => {
        if (player.name === 'enemy') {
            // disable
            startBtn.disabled = true;
            randomizeBtn.disabled = true;

            // get enemyboard
            const enemyBoard = document.querySelector('.board-enemy');
            enemyBoard.addEventListener('click', gameScreen.handleEnemyBoardClick);
        }
    })
}

export default startButton;